<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            [
                'count' => $this->occasion_count,
                'name' => "Liczba Okazji"
            ],
            [
                'count' => $this->comment_count,
                'name' => "Liczba Komentarzy"
            ],
            [
                'count' => $this->users_count,
                'name' => "Liczba Użytkowników"
            ],
        ];
    }
}
