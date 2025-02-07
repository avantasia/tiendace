<?php
namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Auth;

class Order extends Model
{


    public function __construct(array $attributes = array())
    {
        $userid = Auth::user()->id;
        $this->user_id=$userid;

    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'paid_date','sent_date','received_date','payment_method','shipping_method'
    ];


    protected $attributes = array(
        'user_id' => ''
    );

    /**
     * Get the related products
     * @return BelongsToMany
     */
    public function products()
    {
        return $this->belongsToMany('App\Models\Product');
    }

    /**
     * Get the related user
     * @return BelongsTo
     */
    public function user(){

        return $this->belongsTo('App\Models\User');
    }

}
