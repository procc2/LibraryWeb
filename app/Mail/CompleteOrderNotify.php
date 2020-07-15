<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CompleteOrderNotify extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($loan)
    {
        $this->loan = $loan;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        \Log::info($this->loan);
        return $this->view('main.sendMailOrderComplete')->with([
            'loan' => $this->loan,
        ]);;
    }
}
