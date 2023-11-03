<?php

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/users/register' , function (Request $request) {
    if (validateCaptcha($request->input('captchaResponse'))){
        // register and send email
        $registeredUser = User::find('email', '=', $request->input('email'));
        if ($registeredUser == null) {
            $cle = md5(microtime(TRUE)*100000);
            $mailsent = sendEmail($request->input('email'), $request->input('firstName'), $cle, $request->input('language'));
            $id = User::register($request, $mailsent, $cle);
            Profile::create($id);
            return $id;
        } else {
            if ($registeredUser->validation == 0)  {
                # TODO Check how to return error
                return 'ERROR.EMAIL-VALIDATION';
            } else {
                return 'ERROR.EMAIL-ALREADY-REGISTERED';
            }
        }        
    } else {
        return 'ERROR.CAPTCHA'; 
    }
})->name('user.register');

function validateCaptcha($response): bool {
	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => env('CAPTCHA_SECRET', ''),
		'response' => $response
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success=json_decode($verify);
    return $captcha_success->success;
}

function sendEmail($email, $prenom, $cle, $langue): int {
    // TODO Check internationalisation for Laravel
    $annee = env('TIP_YEAR', '');
    $to  = $email;
    $subject = "TIP".$annee." - ".$texte[795];
    $message = "
    <html>
        <head>
        <meta charset='utf-8' />
        <title>Registration - TIP '".$annee."'</title>
        </head>
        <body>
        <img src='https://registration.paris-tournament.com/registration/header.jpg' style='border-radius:10px;'><br><br>
        <font face='arial'>".$texte[619]." ".$prenom.",<br><br>
        ".$texte[620]."<br><br>
        <a href='http://registration.paris-tournament.com/registration/verif.php?langue=1&x=".$cle."&e=".$email."' target='_blank'>".$texte[621]." !</a><br>
        ".$texte[807].": <i>registration.paris-tournament.com/registration/verif.php?langue=1&x=".$cle."&e=".$email."</i><br><br>
        ".$texte[622]."<br><br>
        ".$texte[623]."<br><br>
        <b>".$texte[624]."</b></font>
        </body>
    </html>
    ";

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    $headers[] = 'From: Registration Team <registration@paris-tournament.com>';

    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
        return 1;
    } else {
        return 2;
    }
}
