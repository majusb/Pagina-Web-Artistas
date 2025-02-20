import { useEffect, useState } from 'react';

const OldBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div>
      <h2>Contratações Anteriores</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <strong>Artista:</strong> {booking.artist} <br />
              <strong>Nome:</strong> {booking.name} <br />
              <strong>Data:</strong> {booking.eventDate} <br />
              <strong>Endereço:</strong> {booking.address} <br />
              <strong>Cachê:</strong> {booking.fee ? `R$ ${booking.fee}` : 'Não especificado'} <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma contratação registrada.</p>
      )}
    </div>
  );
};

export default OldBookings;