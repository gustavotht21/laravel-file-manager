<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\post;

beforeEach(function () {
    actingAs(User::factory()->create());
});

/*
 * Feature tests
 */
it('should be able to user create file', function () {
    $model = new File();

    Storage::fake('public');

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

/*
 * Name field validation
 */
