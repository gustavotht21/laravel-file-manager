<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'path',
        'user_id',
        'created_at',
        'updated_at',
    ];

    /**
     * @return Collection<File>
     */
    public static function search(): Collection
    {
        return File::query()
            ->orderBy(request('order', 'created_at'), request('direction', 'asc'))
            ->get();
    }

    /**
     * @param File|int|string $file
     * @return \Illuminate\Support\Collection<string, Carbon|string>|null
     */
    public static function getFileData(File|int|string $file): ?\Illuminate\Support\Collection
    {
        if (!Auth::user())
            return null;

        if (str_contains($file, '.pdf'))
            str_replace($file, '', '.pdf');

        if (is_int($file)) {
            $file = File::query()->find($file);
        }

        $time = now();

        if ($file instanceof File) {
            return collect([
                'name'       => $file->getAttribute('path'),
                'created_at' => $file->getAttribute('created_at'),
            ]);
        }

        return collect([
            'name'       => $time->format('Ydm-His') . "_" . Auth::id() . "_" . $file . ".pdf",
            'created_at' => $time,
        ]);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return string[]
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:Y-m-d H:i:s',
            'updated_at' => 'datetime:Y-m-d H:i:s',
        ];
    }
}
