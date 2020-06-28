<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRequest extends Model
{
    protected $fillable = ['user_id','request_type','description','status'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
