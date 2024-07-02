<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\delete;
use function Pest\Laravel\post;

beforeEach(function () {
    Storage::fake('public');

    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => 'new file',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();


    $this->fileTable = (new File)->getTable();
});

it('should be able to delete a file', function () {
    delete(route('file.destroy', ['file' => File::query()->first()->getKey()]))
        ->assertRedirect();

    $this->assertDatabaseCount($this->fileTable, 0);
    $this->assertDatabaseMissing($this->fileTable, ['name' => 'new file']);

    Storage::disk('public')->assertDirectoryEmpty($this->fileTable);
});

it('should not be able to users delete another user files', function () {
    $file = File::getFileData(File::query()->first()->getKey());

    actingAs(User::factory()->create());

    delete(route('file.destroy', ['file' => File::query()->first()->getKey()]))
        ->assertForbidden();

    $this->assertDatabaseCount($this->fileTable, 1);
    $this->assertDatabaseHas($this->fileTable, [
        'name' => 'new file',
        'path' => $file->get('name'),
    ]);

    Storage::disk('public')->assertExists($this->fileTable . '/' . $file->get('name'));
});

it('should not be able to unauthenticated users delete files', function () {
    $file = File::getFileData(File::query()->first()->getKey());

    Auth::logout();

    delete(route('file.destroy', ['file' => File::query()->first()->getKey()]))
        ->assertRedirect();

    $this->assertDatabaseCount($this->fileTable, 1);
    $this->assertDatabaseHas($this->fileTable, [
        'name' => 'new file',
        'path' => $file->get('name'),
    ]);

    Storage::disk('public')->assertExists($this->fileTable . '/' . $file->get('name'));
});
