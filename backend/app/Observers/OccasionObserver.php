<?php

namespace App\Observers;

use App\Models\Occasion;
use App\Models\Stat;
use App\Models\UserStat;
use Illuminate\Support\Facades\Auth;

class OccasionObserver
{
    /**
     * Handle the Occasion "created" event.
     */
    public function created(Occasion $occasion): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $occasion->user_id],
            ['occasions-created' => Occasion::where('user_id', $occasion->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['occasion_count' => Occasion::count()]
        );
    }

    /**
     * Handle the Occasion "updated" event.
     */
    public function updated(Occasion $occasion): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $occasion->user_id],
            ['occasions-created' => Occasion::where('user_id', $occasion->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['occasion_count' => Occasion::count()]
        );
    }

    /**
     * Handle the Occasion "deleted" event.
     */
    public function deleted(Occasion $occasion): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $occasion->user_id],
            ['occasions-created' => Occasion::where('user_id', $occasion->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['occasion_count' => Occasion::count()]
        );
    }

    /**
     * Handle the Occasion "restored" event.
     */
    public function restored(Occasion $occasion): void
    {
        //
    }

    /**
     * Handle the Occasion "force deleted" event.
     */
    public function forceDeleted(Occasion $occasion): void
    {
        UserStat::updateOrCreate(
            ['user_id' => $occasion->user_id],
            ['occasions-created' => Occasion::where('user_id', $occasion->user_id)->get()->count()]
        );

        Stat::updateOrCreate(
            ['id' => 1],
            ['occasion_count' => Occasion::count()]
        );
    }
}
