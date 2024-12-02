// src/components/BuyTicket.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BuyTicket = () => {

  const { id } = useParams();

  const event = {
    1: { title: 'Concert de Rock', date: '2024-11-25', location: 'Sala Palatului', price: '100 RON' },
    2: { title: 'Teatru', date: '2024-12-01', location: 'Teatrul Național', price: '50 RON' },
    3: { title: 'Stand-Up Comedy', date: '2024-12-10', location: 'Cinema City', price: '80 RON' },
  };

  const eventDetails = event[id];

  if (!eventDetails) {
    return <h2>Evenimentul nu a fost găsit!</h2>;
  }

  return (
    <div className="buy-ticket">
      <h2>Achiziționează Bilete pentru: {eventDetails.title}</h2>
      <p><strong>Data:</strong> {eventDetails.date}</p>
      <p><strong>Locație:</strong> {eventDetails.location}</p>
      <p><strong>Preț:</strong> {eventDetails.price}</p>
      <p>Completează detaliile de mai jos pentru a cumpăra biletele:</p>
      
      {/* Form pentru achiziționarea biletelor */}
      <form>
        <label for="ticket-quantity">Cantitate Bilete:</label>
        <input type="number" id="ticket-quantity" name="ticket-quantity" min="1" max="10" defaultValue="1" />
        <br />
        <button type="submit" className="buy-now-btn">Cumpără Acum</button>
      </form>
    </div>
  );
};

export default BuyTicket;
