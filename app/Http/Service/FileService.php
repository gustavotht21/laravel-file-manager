<?php

namespace App\Http\Service;

use App\Models\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class FileService
{
    /**
     * @param array<string|UploadedFile> $data
     */
    public function store(array $data): void
    {
        $fileName = Auth::id() . '_' . $data['name'] . '.pdf';

        Storage::disk('public')->putFileAs((new File)->getTable(), $data["file"], $fileName);

        File::query()->create([
            'name'    => $data['name'],
            'path'    => $fileName,
            'user_id' => Auth::id(),
        ]);
    }
}
