<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\post;

beforeEach(function () {
    Storage::fake('public');

    $this->fileTable = (new File)->getTable();
});

/*
 * Feature tests
 */
it('should be able to users create a file', function () {
    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => 'test name',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();

    $this->assertDatabaseCount($this->fileTable, 1);
    $this->assertDatabaseHas($this->fileTable, [
        'name' => 'test name',
        'path' => 'test name.pdf'
    ]);

    Storage::disk('public')->assertExists($this->fileTable . '/' . 'test name.pdf');
});

it('should not be able to unauthenticated users create a file', function () {

    post(route('file.store'), [
        'name' => 'test name',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();

    $this->assertDatabaseCount($this->fileTable, 0);
    $this->assertDatabaseMissing($this->fileTable, [
        'name' => 'test name',
        'path' => 'test name.pdf'
    ]);

    Storage::disk('public')->assertMissing($this->fileTable . '/' . 'test name.pdf');
});

/*
 * Name field validation
 */
it('should a file has a name', function () {
    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => null,
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertSessionHasErrors([
        'name' => __('validation.required', ['attribute' => 'name']),
    ]);

    $this->assertDatabaseCount($this->fileTable, 0);
    $this->assertDatabaseMissing($this->fileTable, ['name' => null]);

    Storage::disk('public')->assertMissing($this->fileTable . '/' . '.pdf');
});

it('should file name has at least 3 characters', function () {
    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => 'aa',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertSessionHasErrors([
        'name' => __('validation.min.string', [
            'attribute' => 'name',
            'min'       => 3
        ]),
    ]);

    $this->assertDatabaseCount($this->fileTable, 0);
    $this->assertDatabaseMissing($this->fileTable, ['name' => 'aa']);

    Storage::disk('public')->assertMissing($this->fileTable . '/' . 'aa.pdf');
});

it('should file name has at most 255 characters', function () {
    actingAs(User::factory()->create());
    $veryBigName = str_repeat('a', 256);

    post(route('file.store'), [
        'name' => $veryBigName,
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertSessionHasErrors([
        'name' => __('validation.max.string', [
            'attribute' => 'name',
            'max'       => 255
        ]),
    ]);

    $this->assertDatabaseCount($this->fileTable, 0);
    $this->assertDatabaseMissing($this->fileTable, ['name' => null]);

    Storage::disk('public')->assertMissing($this->fileTable . '/' . $veryBigName . '.pdf');
});

/*
 * File field Validation
 */
it('should a file has an upload', function () {
    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => 'test name',
        'file' => null
    ])->assertSessionHasErrors([
        'file' => __('validation.required', ['attribute' => 'file']),
    ]);

    $this->assertDatabaseCount($this->fileTable, 0);
    $this->assertDatabaseMissing($this->fileTable, ['path' => null]);

    Storage::disk('public')->assertMissing($this->fileTable . '/' . '.pdf');
});

it('should file extension be .pdf', function () {
    actingAs(User::factory()->create());

    foreach ([
                 '.png',
                 '.jpg',
                 '.jpeg',
                 '.gif'
             ] as $extension) {
        post(route('file.store'), [
            'name' => 'test name',
            'file' => UploadedFile::fake()->create('test' . $extension)
        ])->assertSessionHasErrors([
            'file' => __('validation.extensions', [
                'attribute' => 'file',
                'values'    => 'pdf'
            ])
        ]);

        $this->assertDatabaseCount($this->fileTable, 0);
        $this->assertDatabaseMissing($this->fileTable, [
            'name' => 'test name',
            'path' => 'test name' . $extension
        ]);

        Storage::disk('public')->assertMissing($this->fileTable . '/' . 'test name' . $extension);
    }
});
