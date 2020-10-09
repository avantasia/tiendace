<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Auth;

class Cart extends Model
{


    public function __construct(array $attributes = array() )
    {

        if($attributes == null){
            $this->user_id = Auth::user()->id;
        }else{
            $this->user_id = $attributes['user_id'];
        }

    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

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
