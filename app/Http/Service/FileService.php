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
        $file = File::getFileData($data['name']);

        Storage::disk('public')->putFileAs((new File)->getTable(), $data["file"], $file->get('name'));

        File::query()->create([
            'name'       => $data['name'],
            'path'       => $file->get('name'),
            'user_id'    => Auth::id(),
            'created_at' => $file->get('created_at'),
            'updated_at' => $file->get('created_at')
        ]);
    }

    public function delete(File $file): void
    {
        $filePath = File::getFileData($file)->get('name');

        Storage::disk('public')->delete($file->getTable() . '/' . $filePath);

        $file->delete();
    }
}
