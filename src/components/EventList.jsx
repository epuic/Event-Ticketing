
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import concertRock from '../assets/images/concert-rock.jpg';
import teatruDrama from '../assets/images/teatru-drama.jpg';
import standup from '../assets/images/stand-up-comedy.jpg';

const EventList = () => {
  
  const events = [
    { id: 1, title: 'Concert de Rock', date: '2024-12-25', location: 'Sala Palatului', price: '100 RON', image: concertRock},
    { id: 2, title: 'Teatru', date: '2024-12-01', location: 'Teatrul Național', price: '50 RON', image: teatruDrama },
    { id: 3, title: 'Stand-Up Comedy', date: '2024-12-10', location: 'Cinema City', price: '80 RON', image: standup },
  ];

  
  const [searchTerm, setSearchTerm] = useState('');


  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="event-list">
      <h2>Evenimente Disponibile</h2>

      {/* Câmpul de căutare */}
      <input
        type="text"
        placeholder="Căutați evenimente..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />

      <ul>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <li key={event.id}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <div className="event-price">{event.price}</div>
              <Link to={`/buy-ticket/${event.id}`} className="buy-tickets">
                Buy Tickets
              </Link>
            </li>
          ))
        ) : (
          <p>No events found matching your search.</p>
        )}
      </ul>
    </div>
  );
};

export default EventList;
