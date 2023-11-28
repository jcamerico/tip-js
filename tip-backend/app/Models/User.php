<?php

namespace App\Models;

use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Log;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    const VALIDATION_NOT_VALIDATED = 0;
    const ACCOUNT_NOT_LOCKED = 0;
    const ETAPE_ACCOUNT_CREATED = 0;
    
    protected $table = 'R_auth';
    protected $primaryKey = 'id_user';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public static function register(Request $request, $sendmail, $cle) {
        $now = date("YmdHis");
        $user = new User();
        $user->prenom = $request->input('firstName');
        $user->nom = $request->input('lastName');
        $user->email = $request->input('email');
        $user->password = sha1($request->input('password'));
        $user->validation = User::VALIDATION_NOT_VALIDATED;
        $user->datecrea = $now;
        $user->lastco = $now;
        $user->lastip = $_SERVER['REMOTE_ADDR']; // TODO to test, we can get from query
        $user->sendmail = $sendmail;
        $user->clef = $cle;
        $user->etape = User::ETAPE_ACCOUNT_CREATED;
        $user->lockaccount = User::ACCOUNT_NOT_LOCKED;
        $user->ddn = '';
        $user->pays = '';
        $user->nation = '';
        $user->session = '';
        $user->tokenresetpwd = '';
        $user->dateresetpwd = '';
        $user->save();
        return $user->id_user;
    }

    public function updateConnection(Request $request) {
        $this->lastco = date("YmdHis");
        $this->lastip = $_SERVER['REMOTE_ADDR'];
        $this->save();
    }

    public function resetPassword(Request $request) {
        $password = sha1($request->input('password'));
        $this->password = $password;
        $this->tokenresetpwd = '';
        $this->save();
    }

    public function validateEmail() {
        $this->validation = 1;
        $this->save();
    }

    public function updateResetToken($token) {
        $this->tokenresetpwd = $token;
        $this->dateresetpwd = date("YmdHi");   
        $this->save();  
    }

    public function setSendMail($sendmail) {
        $this->sendmail = $sendmail;
        $this->save();
    }
    
}
