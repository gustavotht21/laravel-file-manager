<?php

use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('should user be authenticated to view create file page', function () {
    get(route('file.create'))->assertRedirect()->assertRedirectToRoute('login');
});

it('should authenticated user to view create file page', function () {
    actingAs(User::factory()->create());

    get(route('file.create'))->assertOk();
});
