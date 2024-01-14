<?php

namespace App\Listeners;

use App\Events\RatingCreated;
use App\Models\UserStat;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateOccasionsRatedUserStat
{
    /**
     * Handle the event.
     */
    public function handle(RatingCreated $event): void
    {    
        $userStat = UserStat::where('user_id', $event->user->id)->first();
        if ($userStat) {
            $occasionsRated = $userStat->occasions_rated + 1;
        } else {
            $occasionsRated = 1;
        }
      
        UserStat::updateOrCreate(
            ['user_id' => $event->user->id],
            ['occasions_rated' => $occasionsRated]
        );
        
    }
}
