<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
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

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
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
        $user->lastip = $_SERVER['REMOTE_ADDR']; // to test, we can get from query
        $user->sendmail = $sendmail;
        $user->cle = $cle;
        $user->etape = User::ETAPE_ACCOUNT_CREATED;
        $user->lockaccount = User::ACCOUNT_NOT_LOCKED;
        $user->save();
        return $user->id_user;
    }
}
