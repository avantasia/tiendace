<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    /**
     * Return all products from a category
     *
     * @return BelongsToMany
     */
    public function products()
    {
        return $this->belongsToMany('App\Models\Product', 'products_categories', 'category_id', 'product_id');
    }

}
