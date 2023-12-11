<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Services\CommentRatingService;
use App\Http\Resources\OccasionResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $service = App::make(CommentRatingService::class);
        
        // return parent::toArray($request);
        return [
            'id' => $this->id, 	
            'occasionId' => $this->occasion_id,
            'user' => $this->user->only(['id', 'name', 'email']),
            'content' => $this->content,
            'parentId' => $this->parent_id,
            'createdAt' => $this->created_at->format('d.m.Y H:i'),
            'rating' => $service->for($this->occasion_id)->getRating($this->id)
        ];
    }
}
