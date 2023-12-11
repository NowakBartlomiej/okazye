<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class CommentRatingService
{
    private $occasion_id = null;
    private $data = null;

    public function __construct()
    {
        $this->data = collect();
    }

    public function getRating($comment_id)
    {
        if ($this->data->has($comment_id)) {
            return $this->data->get($comment_id);
        }
        return null;
    }

    public function for($occasion_id)
    {
        if ($occasion_id == $this->occasion_id) {
            return $this;
        }

        $this->occasion_id = $occasion_id;


        $this->data = DB::table('comment_user')
            ->select('comment_id', 'type', DB::raw('count(type) type_count'))
            ->where('occasion_id', $this->occasion_id)
            ->groupBy('comment_id', 'type')->get()->groupBy(['comment_id', 'type']);
        
            $this->data = $this->data->map(function($element, $value){
                return $element->map(function($e, $v){
                    return $e->first()->type_count;
                });
            });

        return $this;
    }
}
