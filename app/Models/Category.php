<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'coverimage', 'name'
    ];




    public function products()
    {
        return $this->belongsToMany('App\Models\Product','products_categories','category_id','product_id');
    }

}
