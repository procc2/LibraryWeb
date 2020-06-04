<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $fillable = ['loan_date', 'loan_is_active', 'user_id'];
    
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','user_id');
    }

    public function details()
    {
        return $this->hasMany(LoanDetail::class);
    }
}
