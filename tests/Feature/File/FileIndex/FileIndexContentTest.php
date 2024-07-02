<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

beforeEach(function () {
    Storage::fake('public');

    actingAs(User::factory()->create());

    post(route('file.store'), [
        'name' => 'File A',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();

    post(route('file.store'), [
        'name' => 'File B',
        'file' => UploadedFile::fake()->create('test.pdf')
    ])->assertRedirect();

    $this->fileTable = (new File)->getTable();
});

it('should users can view files content', function () {
    $files = File::query()->get();

    get(route('file.index'))
        ->assertInertia(fn(Assert $page) => $page
            ->component('File/FileIndex')
            ->has('files', 2)
            ->has('files.0', fn(Assert $page) => $page
                ->where('id', $files[0]->id)
                ->where('name', 'File A')
                ->where('path', $files[0]->path)
                ->where('created_at', $files[0]->created_at->format('Y-m-d H:i:s'))
                ->where('updated_at', $files[0]->updated_at->format('Y-m-d H:i:s'))
                ->where('user_id', Auth::id())
            )
            ->has('files.1', fn(Assert $page) => $page
                ->where('id', $files[1]->id)
                ->where('name', 'File B')
                ->where('path', $files[1]->path)
                ->where('created_at', $files[1]->created_at->format('Y-m-d H:i:s'))
                ->where('updated_at', $files[1]->updated_at->format('Y-m-d H:i:s'))
                ->where('user_id', Auth::id())
            )
        );
});

it('should users can order files content by name', function () {
    $files = File::query()->get();

    get(route('file.index', [
        'order'     => 'name',
        'direction' => 'desc',
    ]))
        ->assertInertia(fn(Assert $page) => $page
            ->component('File/FileIndex')
            ->has('files', 2)
            ->has('files.0', fn(Assert $page) => $page
                ->where('id', $files[1]->id)
                ->where('name', 'File B')
                ->where('path', $files[1]->path)
                ->where('created_at', $files[1]->created_at->format('Y-m-d H:i:s'))
                ->where('updated_at', $files[1]->updated_at->format('Y-m-d H:i:s'))
                ->where('user_id', Auth::id())
            )
            ->has('files.1', fn(Assert $page) => $page
                ->where('id', $files[0]->id)
                ->where('name', 'File A')
                ->where('path', $files[0]->path)
                ->where('created_at', $files[0]->created_at->format('Y-m-d H:i:s'))
                ->where('updated_at', $files[0]->updated_at->format('Y-m-d H:i:s'))
                ->where('user_id', Auth::id())
            )
        );
});

it('should users cannot order files content by invalid order', function () {
    $route = 'file.index';
    $files = File::query()->get();

    get(route($route));

    get(route($route, [
        'order'     => 'invalid',
        'direction' => 'desc',
    ]))
        ->assertRedirect(route($route, [
            'order'     => null,
            'direction' => null,
        ]));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'desc',
    ]));

    get(route($route, [
        'order'     => 'invalid',
        'direction' => 'desc',
    ]))
        ->assertRedirect(route($route, [
            'direction' => 'desc',
            'order'     => 'name',
        ]));
});

it('should users cannot order files content by invalid direction', function () {
    $route = 'file.index';

    get(route($route));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'invalid',
    ]))
        ->assertRedirect(route($route, [
            'order'     => null,
            'direction' => null,
        ]));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'desc',
    ]));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'invalid',
    ]))
        ->assertRedirect(route($route, [
            'direction' => 'desc',
            'order'     => 'name',
        ]));
});
