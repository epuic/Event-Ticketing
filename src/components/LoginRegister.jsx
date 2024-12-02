import React, { useState } from 'react';
import './LoginRegister.css'; // Importăm fișierul CSS pentru stilizare


const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Înlocuiește cu validarea autentificării tale
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      alert('Email sau parolă incorectă!');
    }
  };

  return (
    <div className="login-register-container">
      <h2>Autentificare</h2>

      {/* Dacă utilizatorul este deja logat */}
      {isLoggedIn ? (
        <div className="logged-in-message">
          <h3>Bine ai venit, {email}!</h3>
          <button className="btn" onClick={() => setIsLoggedIn(false)}>Deconectare</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introdu emailul"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Parolă:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introdu parola"
              required
            />
          </div>
          <button type="submit" className="btn">Autentifică-te</button>
        </form>
      )}

      {/* Buton pentru înregistrare, dacă nu este logat */}
      {!isLoggedIn && (
        <div className="register-link">
          <p>Nu ai cont? <a href="/register">Înregistrează-te aici</a></p>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
