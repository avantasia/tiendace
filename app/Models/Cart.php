<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

    ];


    public function products()
    {
        return $this->belongsToMany('App\Models\Product');
    }
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

}
