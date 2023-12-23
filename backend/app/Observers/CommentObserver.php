<?php

namespace App\Observers;

use App\Models\Comment;
use App\Models\Stat;
use App\Models\UserStat;

class CommentObserver
{
    /**
     * Handle the Comment "created" event.
     */
    public function created(Comment $comment): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $comment->user_id],
            ['comments_created' => Comment::where('user_id', $comment->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['comment_count' => Comment::count()]
        );
    }

    /**
     * Handle the Comment "updated" event.
     */
    public function updated(Comment $comment): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $comment->user_id],
            ['comments_created' => Comment::where('user_id', $comment->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['comment_count' => Comment::count()]
        );
    }

    /**
     * Handle the Comment "deleted" event.
     */
    public function deleted(Comment $comment): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $comment->user_id],
            ['comments_created' => Comment::where('user_id', $comment->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['comment_count' => Comment::count()]
        );
    }

    /**
     * Handle the Comment "restored" event.
     */
    public function restored(Comment $comment): void
    {
        //
    }

    /**
     * Handle the Comment "force deleted" event.
     */
    public function forceDeleted(Comment $comment): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $comment->user_id],
            ['comments_created' => Comment::where('user_id', $comment->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['comment_count' => Comment::count()]
        );
    }
}
