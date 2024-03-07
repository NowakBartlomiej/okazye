<?php

namespace App\Listeners;

use App\Models\UserStat;
use App\Events\RatingCreated;
use App\Events\RatingUpdated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\DB;

class UpdateUserOccasionRateUserStat
{
    /**
     * Handle the event.
     */
    public function handle(RatingCreated|RatingUpdated $event): void
    {
        $data = DB::table('occasion_user')
        
        ->join('occasions', 'occasions.id', '=', 'occasion_user.occasion_id')
        ->where('occasions.user_id', $event->occasion->user_id)
        ->select('occasion_user.occasion_id', 
            DB::raw('SUM(occasion_user.rating) as sum')
        )
            ->groupBy('occasion_user.occasion_id')
            ->get();

        $max = $data->max('sum');     

        UserStat::updateOrCreate(
            ['user_id' => $event->occasion->user_id],
            ['user_occasion_rate' => $max]
        );
    }
}
