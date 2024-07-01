<?php

use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('should users can view files content', function () {
    $user = User::factory()->create();
    actingAs($user);

    $user->files()->create([
        'name' => 'File',
        'path' => $user->getKey() . "_File.pdf",
    ]);

    get(route('file.index'))
        ->assertOk()
        ->assertSee('File');
});

it('should users can order files content by name', function () {
    $user = User::factory()->create();
    actingAs($user);

    $user->files()->create([
        'name' => 'File A',
        'path' => $user->getKey() . "_File A.pdf",
    ]);

    $user->files()->create([
        'name' => 'File B',
        'path' => $user->getKey() . "_File B.pdf",
    ]);

    get(route('file.index', [
        'order'     => 'name',
        'direction' => 'desc',
    ]))
        ->assertOk()
        ->assertSeeInOrder([
            'File B',
            'File A',
        ]);
});

it('should users cannot order files content by invalid order', function () {
    $route = 'file.index';
    $user = User::factory()->create();
    actingAs($user);

    $user->files()->create([
        'name' => 'File A',
        'path' => $user->getKey() . "_File A.pdf",
    ]);

    $user->files()->create([
        'name' => 'File B',
        'path' => $user->getKey() . "_File B.pdf",
    ]);

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
    $user = User::factory()->create();
    actingAs($user);

    $user->files()->create([
        'name' => 'File A',
        'path' => $user->getKey() . "_File A.pdf",
    ]);

    $user->files()->create([
        'name' => 'File B',
        'path' => $user->getKey() . "_File B.pdf",
    ]);

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
