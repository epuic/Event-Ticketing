import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister'; 
import MyTickets from './components/MyTickets'; 
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          {/* Titlu și Descriere Site */}
          <header className="site-header">
            <h1>Evenimente Live</h1>
            <p>Descoperă evenimentele tale preferate și cumpără bilete cu ușurință! Fie că vrei un concert, teatru sau comedie, aici găsești totul!</p>
          </header>
          
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/mytickets" element={<MyTickets />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
