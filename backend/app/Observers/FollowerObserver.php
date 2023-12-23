<?php

namespace App\Observers;

use App\Models\Follower;
use App\Models\UserStat;

class FollowerObserver
{
    /**
     * Handle the Follower "created" event.
     */
    public function created(Follower $follower): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $follower->user_id],
            ['users_followers' => Follower::where('user_id', $follower->user_id)->get()->count()]
        );
    }

    /**
     * Handle the Follower "updated" event.
     */
    public function updated(Follower $follower): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $follower->user_id],
            ['users_followers' => Follower::where('user_id', $follower->user_id)->get()->count()]
        );
    }

    /**
     * Handle the Follower "deleted" event.
     */
    public function deleted(Follower $follower): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $follower->user_id],
            ['users_followers' => Follower::where('user_id', $follower->user_id)->get()->count()]
        );
    }

    /**
     * Handle the Follower "restored" event.
     */
    public function restored(Follower $follower): void
    {
        //
    }

    /**
     * Handle the Follower "force deleted" event.
     */
    public function forceDeleted(Follower $follower): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $follower->user_id],
            ['users_followers' => Follower::where('user_id', $follower->user_id)->get()->count()]
        );
    }
}
