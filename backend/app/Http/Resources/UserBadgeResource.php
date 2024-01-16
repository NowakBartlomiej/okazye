<?php

namespace App\Http\Resources;

use App\Models\Badge;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use stdClass;

class UserBadgeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        $badges = Badge::all()->toArray();
        
        $types = ['occasions-created', 'occasions-rated', 'comments-created', 'users-followers', 'user-occasion-rate'];

        foreach($types as $type) {
             $hasBadges[$type] = [];
             foreach($badges as $badge) {
                if ($badge['type'] == $type) {
                    switch($type) {
                        case "occasions-created":
                            $val = $this->occasions_created;
                            break;
                        case "occasions-rated":
                            $val = $this->occasions_rated;
                            break;
                        case "comments-created":
                            $val = $this->comments_created;
                            break; 
                        case "users-followers":
                            $val = $this->users_followers;
                            break;   
                        case "user-occasion-rate":
                            $val = $this->user_occasion_rate;
                            break; 
                    }
                    $hasBadges[$type][$badge['name']] = ($val >= $badge['criterion']) ? true : false;
                }
             }
        }

        foreach($types as $type) {
            $criterion[$type] = [];
            foreach($badges as $badge) {
                if ($badge['type'] == $type) {
                    $criterion[$type][$badge['name']] = $badge['criterion'];
                }
            }
        }

        return [
            [
                'name' => 'Ilość dodanych okazji',
                'count' => $this->occasions_created,
                'hasBadges' => $hasBadges['occasions-created'],
                'criterion' => $criterion['occasions-created'],
            ],
            [
                'name' => 'Ilość ocenionych okazji',
                'count' => $this->occasions_rated,
                'hasBadges' => $hasBadges['occasions-rated'],
                'criterion' => $criterion['occasions-rated']
            ],
            [
                'name' => 'Ilość dodanych komentarzy',
                'count' => $this->comments_created,
                'hasBadges' => $hasBadges['comments-created'],
                'criterion' => $criterion['comments-created']
            ],
            [
                'name' => 'Liczba obserwatorów',
                'count' => $this->users_followers,
                'hasBadges' => $hasBadges['users-followers'],
                'criterion' => $criterion['users-followers']
            ],
            [
                'name' => 'Najwyższa ocena okazji',
                'count' => $this->user_occasion_rate,
                'hasBadges' => $hasBadges['user-occasion-rate'],
                'criterion' => $criterion['user-occasion-rate']
            ],
        ];
    }
}
