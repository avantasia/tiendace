<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description'
    ];


    /**
     * Return all users for a role     *
     *
     * @return BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }

}
