<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use App\Http\Resources\CommentResource;
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
            'image' => $this->image == null ? 'no-image.png' : $this->image,	
            'newPrice' => $this->new_price,	
            'oldPrice' => $this->old_price,	
            'url' => $this->url,	
            'rating' => $this->rating(),
            'durationDate' => $this->duration_date,	
            'status' => $this->status,	
            'category' => $this->category->only(['id', 'name']),	
            'user' => $this->user->only(['id', 'name', 'email']),	
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'createdAt' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
