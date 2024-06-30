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
        $fileName = now()->format('Ymd_His') . '_' . $data['name'] . '.pdf';

        Storage::disk('public')->putFileAs('/documents', $data["file"], $fileName);

        File::query()->create([
            'name'    => $data['name'],
            'path'    => Storage::url("documents/$fileName"),
            'user_id' => Auth::id(),
        ]);
    }
}
