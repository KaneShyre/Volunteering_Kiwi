<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'event_name',
        'number_volunteers',
        'location',
        'event_time',
        'description',
        'interests'       
    ];
}
