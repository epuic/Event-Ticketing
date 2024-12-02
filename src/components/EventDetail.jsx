import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TicketForm from './TicketForm';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({
    title: 'Concert de Rock',
    date: '2024-11-25',
    location: 'Sala Palatului',
    description: 'Un concert extraordinar cu trupe internaționale.',
    ticketsAvailable: 100,
  });

  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <TicketForm availableTickets={event.ticketsAvailable} />
    </div>
  );
};

export default EventDetail;
