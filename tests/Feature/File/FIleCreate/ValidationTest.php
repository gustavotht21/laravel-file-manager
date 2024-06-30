<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\post;

beforeEach(function () {
    Storage::fake('public');
});

/*
 * Feature tests
 */
it('should be able to users create a file', function () {
    actingAs(User::factory()->create());
    $model = new File();

    post(route('file.store'), [
        'name' => 'test name',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();

    $this->assertDatabaseCount($model->getTable(), 1);
    $this->assertDatabaseHas($model->getTable(), [
        'name' => 'test name',
        'path' => Auth::id() . '_' . 'test name.pdf'
    ]);

    Storage::disk('public')->assertExists($model->getTable() . '/' . Auth::id() . '_' . 'test name.pdf');
});

it('should not be able to unauthenticated users create a file', function () {
    $model = new File();

    post(route('file.store'), [
        'name' => 'test name',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();

    $this->assertDatabaseCount($model->getTable(), 0);
    $this->assertDatabaseMissing($model->getTable(), [
        'name' => 'test name',
        'path' => Auth::id() . '_' . 'test name.pdf'
    ]);

    Storage::disk('public')->assertMissing($model->getTable() . '/' . Auth::id() . '_' . 'test name.pdf');
});

/*
 * Name field validation
 */
it('should a file has a name', function () {
    actingAs(User::factory()->create());
    $model = new File();

    post(route('file.store'), [
        'name' => null,
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertSessionHasErrors([
        'name' => __('validation.required', ['attribute' => 'name']),
    ]);

    $this->assertDatabaseCount($model->getTable(), 0);
    $this->assertDatabaseMissing($model->getTable(), ['name' => null]);

    Storage::disk('public')->assertMissing($model->getTable() . '/' . Auth::id() . '_' . '.pdf');
});

it('should file name has at least 3 characters', function () {
    actingAs(User::factory()->create());
    $model = new File();

    post(route('file.store'), [
        'name' => 'aa',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertSessionHasErrors([
        'name' => __('validation.min.string', [
            'attribute' => 'name',
            'min'       => 3
        ]),
    ]);

    $this->assertDatabaseCount($model->getTable(), 0);
    $this->assertDatabaseMissing($model->getTable(), ['name' => 'aa']);

    Storage::disk('public')->assertMissing($model->getTable() . '/' . Auth::id() . '_' . 'aa.pdf');
});

it('should file name has at most 255 characters', function () {
    actingAs(User::factory()->create());
    $model = new File();
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

    $this->assertDatabaseCount($model->getTable(), 0);
    $this->assertDatabaseMissing($model->getTable(), ['name' => null]);

    Storage::disk('public')->assertMissing($model->getTable() . '/' . Auth::id() . '_' . $veryBigName . '.pdf');
});

/*
 * File field Validation
 */
it('should a file has an upload', function () {
    actingAs(User::factory()->create());
    $model = new File();

    post(route('file.store'), [
        'name' => 'test name',
        'file' => null
    ])->assertSessionHasErrors([
        'file' => __('validation.required', ['attribute' => 'file']),
    ]);

    $this->assertDatabaseCount($model->getTable(), 0);
    $this->assertDatabaseMissing($model->getTable(), ['path' => null]);

    Storage::disk('public')->assertMissing($model->getTable() . '/' . Auth::id() . '_' . '.pdf');
});

it('should file extension be .pdf', function () {
    actingAs(User::factory()->create());
    $model = new File();

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

        $this->assertDatabaseCount($model->getTable(), 0);
        $this->assertDatabaseMissing($model->getTable(), [
            'name' => 'test name',
            'path' => Auth::id() . '_' . 'test name' . $extension
        ]);

        Storage::disk('public')->assertMissing($model->getTable() . '/' . Auth::id() . '_' . 'test name' . $extension);
    }
});
