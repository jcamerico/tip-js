<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use App\Models\RegistrationStep;
use Illuminate\Support\Facades\Log;

class RegistrationController extends Controller
{
 
    const EMAIL_SENT = 1;
    const EMAIL_NOT_SENT = 2;
    
    public function register(Request $request) {
        if ($this->validateCaptcha($request->input('captchaResponse'))){
            // register and send email
            $registeredUser = User::where('email', $request->input('email'))->first();
            if ($registeredUser == null) {
                $cle = md5(microtime(TRUE)*100000);
                $mailsent = $this->sendValidationEmail($request->input('email'), $request->input('firstName'), $cle);
                $id = User::register($request, $mailsent, $cle);
                Profile::create($id);
                RegistrationStep::create($id);
                return response(200);
            } else {
                if ($registeredUser->validation == 0)  {
                    Log::debug('User not validated');
                    return response('ERROR.EMAIL-VALIDATION', 400);
                } else {
                    Log::debug('User already registered');
                    return response('ERROR.EMAIL-ALREADY-REGISTERED', 400);
                }
            }        
        } else {
            return response('ERROR.CAPTCHA', 400); 
        }
    }

    public function validationEmail(Request $request) {
        $email = $request->input('email');
        $registeredUser = User::where('email', $email)->first();
        $mailsent = $this->sendValidationEmail($email, $registeredUser->prenom, $registeredUser->clef);
        $registeredUser->setSendMail($mailsent);
        return response(200);
    }

    public function passwordResetEmail(Request $request) {
        $email = $request->input('email');
        $registeredUser = User::where('email', $email)->first();
        if ($registeredUser == null) {
            Log::debug('User does not exist');
            return response('ERROR.EMAIL-UNKNOWN', 400);
        } else {
            Log::debug('Email exists and pwd reset email will be sent');
            $token = md5(microtime(TRUE)*100000);
            $this->sendPasswordResetEmail($email, $registeredUser->prenom, $token);
            $registeredUser->updateResetToken($token);
            return response(200);
        }
    }

    public function resetPassword(Request $request) {
        $token = $request->input('token');
        $registeredUser = User::where('tokenresetpwd', $token)->first();
        if ($registeredUser != null) {
            $registeredUser->resetPassword($request);
            return response(200);
        } else {
            return response('ERROR.RESET-TOKEN-INVALID', 400);
        }
    }

    public function validateEmail(Request $request) {
        $key = $request->input('key');
        $email = $request->input('email');
        $registeredUser = User::where('clef', $key)->where('email', $email)->first();
        if ($registeredUser != null) {
            $registeredUser->validateEmail();
            return response(200);
        } else {
            return response('ERROR.EMAIL-VALIDATION', 400);
        }
    }

    public function validateResetToken(Request $request) {
        $token = $request->input('token');
        $registeredUser = User::where('tokenresetpwd', $token)->first();
        if ($registeredUser == null) {
            return response('ERROR.RESET-TOKEN-INVALID', 400);
        } else {        
            return response(200);
        }
    }

    private function validateCaptcha($response): bool {
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $data = [
            'secret' => env('CAPTCHA_SECRET', ''),
            'response' => $response
        ];
        $options = array(
            'http' => array (
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded",
                'content' => http_build_query($data)
            )
        );
        $context  = stream_context_create($options);
        $verify = file_get_contents($url, false, $context);
        $captcha_success=json_decode($verify);
        return $captcha_success->success;
    }

    private function sendValidationEmail($email, $prenom, $cle): int {
        // TODO Internationalization
        $annee = env('TIP_YEAR', '');
        $to  = $email;
        $subject = "TIP".$annee." - Please confirm your email address";
        $message = "
        <html>
            <head>
            <meta charset='utf-8' />
            <title>Registration - TIP '".$annee."'</title>
            </head>
            <body>
            <img src='https://registration.paris-tournament.com/registration/header.jpg' style='border-radius:10px;'><br><br>
            <font face='arial'>Hello ".$prenom.",<br><br>
            Please confirm your email address by clicking the following link:<br><br>
            <a href='http://registration.paris-tournament.com/registration/email-verification?x=".$cle."&e=".$email."' target='_blank'>Validate my address !</a><br>
            In case of problem you can copy this link in your internet browser: <i>registration.paris-tournament.com/registration/email-verification?x=".$cle."&e=".$email."</i><br><br>
            If you have any questions, please don't hesitate to contact us by replying this email.<br><br>
            TIP ".$annee." edition is waiting for you! <br><br>
            <b>The registration team</b></font>
            </body>
        </html>
        ";
    
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';
        $headers[] = 'From: Registration Team <registration@paris-tournament.com>';
    
        if (mail($to, $subject, $message, implode("\r\n", $headers))) {
            return RegistrationController::EMAIL_SENT;
        } else {
            return RegistrationController::EMAIL_NOT_SENT;
        }
    }

    private function sendPasswordResetEmail($email, $prenom, $token) {
        // TODO Internationalization
        $annee = env('TIP_YEAR', '');
        $to  = $email;
        $subject = "TIP".$annee." - Reset password";
        $message = "
        <html>
            <head>
            <meta charset='utf-8' />
            <title>Registration - TIP '".$prenom."'</title>
            </head>
            <body>
            <img src='https://registration.paris-tournament.com/registration/header.jpg' style='border-radius:10px;'><br><br>
            <font face='arial'>Hello ".$prenom.",<br><br>
            A password reset was requested.<br>
            You may change your password by following this link, which will remain valid during 24 hours.<br>
            <a href='http://registration.paris-tournament.com/registration/reset-pwd.php?token=".$token."' target='_blank'>Change password</a><br><br>
            Note: If you are not the initiator of this request, you can safely ignore this email.<br><br>
            TIP ".$annee." edition is waiting for you! <br><br>
            <b>The registration team</b></font>
            </body>
        </html>		
        ";
            
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';
        $headers[] = 'From: Registration Team <registration@paris-tournament.com>';			 			
                                
        mail($to, $subject, $message, implode("\r\n", $headers));
    }
}
