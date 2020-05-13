<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    protected $primaryKey = 'publisher_id';
    protected $fillable = ['publisher_name'];

    public function books()
    {
        return $this->hasMany(Book::class,'publisher_id','publisher_id');
    }
}
