import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    fee: '',
    eventDate: '',
    address: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const selectedArtist = JSON.parse(localStorage.getItem('selectedArtist'));
    if (selectedArtist && !formData.artist) {
      
      setFormData((prevState) => ({
        ...prevState,
        artist: selectedArtist.name
      }));
    }
  }, [formData.artist]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.eventDate) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const newBooking = {
      name: formData.name,
      artist: formData.artist,
      fee: formData.fee,
      eventDate: formData.eventDate,
      address: formData.address,
    };

    bookings.push(newBooking);

    localStorage.setItem('bookings', JSON.stringify(bookings));

    navigate('/success');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu Nome"
          required
        />
        <input
          type="text"
          name="artist"
          value={formData.artist}
          readOnly
          placeholder="Artista Selecionado"
        />
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
          placeholder="Cachê"
        />
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Endereço"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default BookingForm;
