import './App.css';
import { useEffect, useState } from 'react';
import BlackJack from './Pages/BlackJack';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from './Pages/LandingPage';

export function Card(value, suit){
  this.value = value;
  this.suit = suit;
}
export const suits = ['♥', '♦', '♣', '♠'];

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <nav className='header'>
          <Link to={'/'}>Home</Link>
          <Link to={'/blackjack'}>Link</Link>
        </nav>
        <Routes>
          <Route index element={<LandingPage />}/>
          <Route path={'/blackjack'} element={<BlackJack />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
