<?php

namespace App\Http\Requests;

use App\Models\File;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreFileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', [File::class]);
    }

    /**
     * @return array<string, ValidationRule|array<string|ValidationRule>|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'min:3',
                'max:255',
                Rule::unique((new File)->getTable(), 'name')->where('user_id', $this->user()->getKey())
            ],
            'file' => [
                'required',
                'file',
                'extensions:pdf'
            ]
        ];
    }
}
