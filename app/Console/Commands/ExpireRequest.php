<?php

namespace App\Console\Commands;

use App\Loan;
use Illuminate\Console\Command;

class ExpireRequest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'expire_request:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        \Log::info('Cron is working');
        $this->info("Cronjob is running ...");
        $deadLine = now()->subDay(3);
        $loans = Loan::where('created_at','<=',$deadLine)->where('loan_is_active',0)->delete();
        $this->info("Successfully deleted ". $loans ." expire loan order");
    }
}
