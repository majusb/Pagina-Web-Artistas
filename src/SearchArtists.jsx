import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchArtists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  
    const storedArtists = JSON.parse(localStorage.getItem('artists')) || [];
    setArtists(storedArtists);
  }, []);

  const handleSearch = () => {
    const filteredArtists = artists.filter(artist =>
      artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArtists(filteredArtists);
  };

  const handleSelectArtist = (artist) => {

    localStorage.setItem('selectedArtist', JSON.stringify(artist));
    navigate('/booking');
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquise por artistas"
      />
      <button onClick={handleSearch}>Buscar</button>

      <div className="grid">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <div key={artist.id} className="card" onClick={() => handleSelectArtist(artist)}>
              {artist.name}
            </div>
          ))
        ) : (
          <p>Nenhum artista encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default SearchArtists;
