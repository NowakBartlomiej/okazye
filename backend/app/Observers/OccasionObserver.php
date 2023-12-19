<?php

namespace App\Observers;

use App\Models\Occasion;

class OccasionObserver
{
    /**
     * Handle the Occasion "created" event.
     */
    public function created(Occasion $occasion): void
    {
        //
    }

    /**
     * Handle the Occasion "updated" event.
     */
    public function updated(Occasion $occasion): void
    {
        //
    }

    /**
     * Handle the Occasion "deleted" event.
     */
    public function deleted(Occasion $occasion): void
    {
        //
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
        //
    }
}
