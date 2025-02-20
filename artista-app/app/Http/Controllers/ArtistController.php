
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function getArtists()
    {
        $artists = [
            ['id' => 1, 'name' => 'Coldplay'],
            ['id' => 2, 'name' => 'Maneskin'],
            ['id' => 3, 'name' => 'BTS'],
        ];

        // Retorna os artistas como uma resposta JSON
        return response()->json($artists);
    }
}
