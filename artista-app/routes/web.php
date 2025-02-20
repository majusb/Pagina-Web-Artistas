use Illuminate\Support\Facades\Route;

Route::get('/artists', [ArtistController::class, 'getArtists']);
