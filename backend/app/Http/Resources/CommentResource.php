<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
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
        // return parent::toArray($request);
        return [
            'occasionId' => $this->occasion_id,
            'user' => $this->user->only(['id', 'name', 'email']),
            'content' => $this->content,
            'parentId' => $this->parent_id,
            'createdAt' => $this->created_at->format('d.m.Y H:i'),
        ];
    }
}
