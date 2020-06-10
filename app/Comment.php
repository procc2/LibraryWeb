<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['book_id','user_id','overview','content'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
