import React, { useState } from 'react';

const TicketForm = ({ availableTickets }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bilete cumpărate: ${ticketCount} pentru ${name} (${email})`);
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <label htmlFor="name">Nume:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="ticketCount">Număr bilete:</label>
      <input
        type="number"
        id="ticketCount"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
        min="1"
        max={availableTickets}
        required
      />
      <button type="submit">Cumpără Bilete</button>
    </form>
  );
};

export default TicketForm;
