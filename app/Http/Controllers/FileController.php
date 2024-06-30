<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFileRequest;
use App\Http\Requests\UpdateFileRequest;
use App\Models\File;
use Inertia\Inertia;
use Inertia\Response;

class FileController extends Controller
{
    public function index(): void
    {
        //
    }

    public function create(): Response
    {
        return Inertia::render('File/FileCreate');
    }

    public function store(StoreFileRequest $request): void
    {
        //
    }

    public function show(File $file): void
    {
        //
    }

    public function edit(File $file): void
    {
        //
    }

    public function update(UpdateFileRequest $request, File $file): void
    {
        //
    }

    public function destroy(File $file): void
    {
        //
    }
}
