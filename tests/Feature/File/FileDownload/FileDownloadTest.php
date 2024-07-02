<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

beforeEach(function () {
    Storage::fake('public');
    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => 'File 1',
        'file' => UploadedFile::fake()->create('test.pdf', 100),
    ]);

    $this->fileTable = (new File)->getTable();
});

it('should be able to download a file', function () {
    $file = File::query()->first();
    Storage::disk('public')->assertExists($this->fileTable . '/' . $file->getAttribute('path'));

    get(route('file.download', 1))
        ->assertDownload($file->getAttribute('name') . '.pdf')
        ->assertOk();
});

it('should user be authenticated to download a file', function () {
    $file = File::query()->first();
    Storage::disk('public')->assertExists($this->fileTable . '/' . $file->getAttribute('path'));

    Auth::logout();

    get(route('file.download', $file))
        ->assertRedirect(route('login'));
});

it('should user not be able to download another user file', function () {
    $file = File::query()->first();
    Storage::disk('public')->assertExists($this->fileTable . '/' . $file->getAttribute('path'));

    actingAs(User::factory()->create());

    get(route('file.download', $file))
        ->assertForbidden();
});
