<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOccasionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:60',
            'image' => 'nullable|image|mimes:png,jpeg,jpg,gif,svg',
            'description' => 'required|max:500',
            'newPrice' => 'regex:/^\d+(\,\d{1,2})?$/',
            'oldPrice' => 'regex:/^\d+(\,\d{1,2})?$/',
            'url' => 'url',
            'categoryId' => 'required'
        ];
    }
}
