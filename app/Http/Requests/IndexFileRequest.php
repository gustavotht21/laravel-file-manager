<?php

namespace App\Http\Requests;

use App\Models\File;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class IndexFileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('viewAny', [File::class]);
    }

    /**
     * @return array<string, ValidationRule|array<string|ValidationRule>|string>
     */
    public function rules(): array
    {
        return [
            'order'     => Rule::in([
                'name',
                'created_at'
            ]),
            'direction' => Rule::in([
                'asc',
                'desc'
            ]),
            'filter'    => Rule::in([
                'name',
                'created_at'
            ]),
        ];
    }
}
