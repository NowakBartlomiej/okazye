<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function parent() {
        return $this->belongsTo(Comment::class, 'comments','parent_id', 'id');
    }
}