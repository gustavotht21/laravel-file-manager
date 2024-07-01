<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexFileRequest;
use App\Http\Requests\StoreFileRequest;
use App\Http\Requests\UpdateFileRequest;
use App\Http\Service\FileService;
use App\Models\File;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class FileController extends Controller
{
    public function __construct(
        private readonly FileService $fileService
    )
    {
    }

    public function index(IndexFileRequest $request): Response
    {
        return Inertia::render('File/FileIndex', [
            'files' => File::search(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('File/FileCreate');
    }

    public function store(StoreFileRequest $request): RedirectResponse
    {
        $this->fileService->store($request->validated());

        return redirect()->back();
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
        Gate::authorize('delete', [
            File::class,
            $file
        ]);

        $this->fileService->delete($file);
    }
}
