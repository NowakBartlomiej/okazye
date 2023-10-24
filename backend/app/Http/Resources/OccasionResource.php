<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OccasionResource extends JsonResource
{
    public static $wrap = false;
    
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id, 	
            'title'	=> $this->title,
            'description' => $this->description,	
            'newPrice' => $this->new_price,	
            'oldPrice' => $this->old_price,	
            'url' => $this->url,	
            'rating' => $this->rating,	
            'durationDate' => $this->duration_date,	
            'status' => $this->status,	
            'category' => $this->category->only(['id', 'name']),	
            // 'comment_id' => $this->comment_id,	
            'user' => $this->user->only(['id', 'name', 'email']),	
            'createdAt' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}