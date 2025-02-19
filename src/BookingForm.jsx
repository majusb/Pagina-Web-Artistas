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
      // Só atualiza o estado do artista se não estiver preenchido ainda
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

    // Validação para garantir que todos os campos obrigatórios sejam preenchidos
    if (!formData.name || !formData.eventDate) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Recuperar as contratações já salvas ou criar uma nova lista
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Criar uma nova contratação
    const newBooking = {
      name: formData.name,
      artist: formData.artist,
      fee: formData.fee,
      eventDate: formData.eventDate,
      address: formData.address,
    };

    // Adicionar a nova contratação à lista
    bookings.push(newBooking);

    // Salvar de volta no localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Navegar para a página de sucesso
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
