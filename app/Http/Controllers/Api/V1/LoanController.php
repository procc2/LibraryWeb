<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Loan;
use App\Mail\CompleteOrderNotify;
use App\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->can('view-loan'))
            return Loan::with('user:name,user_id', 'details', 'details.book')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $exist = Loan::where( [
        //     'user_id'       => $request->user_id,
        // ])->first();
        // if($exist){
        //     return response()->json([
        //         'message' => 'Duplicated'
        //     ], 409);
        // }
        $loan = Loan::create($request->all());
        $user = User::findOrFail($request->user_id);
        try {
            Mail::to($user)->send(new CompleteOrderNotify($loan));
        } catch (Exception $e) {
            throw ($e);
        }
        return $loan;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(Auth::user()->can('view-loan') || intval(Auth::id()) === intval($id))
        return Loan::with('user:name,user_id', 'details')->where('user_id', $id)->get();
        else {
            return response()->json([
                'message' => 'Not Authorized.'
            ], 403);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $loan = Loan::findOrFail($id);
        $loan->loan_is_active = $request->status;
        $loan->loan_date = Carbon::now();
        $loan->save();

        return $loan;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
