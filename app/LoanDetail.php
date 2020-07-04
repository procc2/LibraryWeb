<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoanDetail extends Model
{
    protected $fillable = ['loan_id', 'book_id'];

    public function book()
    {
        return $this->hasOne(Book::class,'book_id','book_id');
    }
    public function loan(){
        return $this->belongsTo(Loan::class,'loan_id');
    }
}
