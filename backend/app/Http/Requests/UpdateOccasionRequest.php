<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UpdateOccasionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'image' => Request::has('image') ? $this->image : null,
            'newPrice' => Request::has('newPrice') && (strlen($this->newPrice) > 0) ? Str::replace(',', '.', $this->newPrice) : null,
            'oldPrice' => Request::has('oldPrice') && (strlen($this->oldPrice) > 0)  ? Str::replace(',', '.', $this->oldPrice) : null,
            'url' => Request::has('url') && (strlen($this->url) > 0) ? $this->url : null,
        ]);
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
            'newPrice' => 'nullable|regex:/^\d+(\.\d{1,2})?$/',
            'oldPrice' => 'nullable|regex:/^\d+(\.\d{1,2})?$/',
            'url' => 'nullable|url',
            'categoryId' => 'required'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Tytuł jest wymagany',
            'description.required' => 'Opis jest wymagany',
            'categoryId.required' => 'Kategoria jest wymagana',
            'url.url' => 'Format URL jest niepoprawny',
            'newPrice' => 'Format ceny jest niepoprawny',
            'oldPrice' => 'Format ceny jest niepoprawny',
        ];
    }
}
