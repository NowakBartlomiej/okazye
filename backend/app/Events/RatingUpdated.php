<?php

namespace App\Events;

use App\Models\Occasion;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RatingUpdated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $occasion;
    public $rating;

    /**
     * Create a new event instance.
     */
    public function __construct(User $user, Occasion $occasion, int $rating)
    {
        $this->user = $user;
        $this->occasion = $occasion;
        $this->rating = $rating;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}