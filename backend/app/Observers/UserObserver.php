<?php

namespace App\Observers;

use App\Models\Stat;
use App\Models\User;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {     
        $user->assignRole('user');

        Stat::updateOrCreate(
            ['id' => 1],
            ['users_count' => User::count()]
        );
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        $user->assignRole('user');

        Stat::updateOrCreate(
            ['id' => 1],
            ['users_count' => User::count()]
        );
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        $user->assignRole('user');

        Stat::updateOrCreate(
            ['id' => 1],
            ['users_count' => User::count()]
        );
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        $user->assignRole('user');

        Stat::updateOrCreate(
            ['id' => 1],
            ['users_count' => User::count()]
        );
    }
}
