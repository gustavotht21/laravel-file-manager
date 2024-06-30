<?php

namespace App\Policies;

use App\Models\File;
use App\Models\User;

class FilePolicy
{
    public function viewAny(User $user): bool
    {
        return false;
    }

    public function view(User $user, File $file): bool
    {
        return false;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, File $file): bool
    {
        return false;
    }

    public function delete(User $user, File $file): bool
    {
        return false;
    }

    public function restore(User $user, File $file): bool
    {
        return false;
    }

    public function forceDelete(User $user, File $file): bool
    {
        return false;
    }
}
