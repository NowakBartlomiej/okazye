<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function parent() {
        return $this->belongsTo(Comment::class, 'comments','parent_id', 'id');
    }

    public function occasion() {
        return $this->belongsTo(Occasion::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
