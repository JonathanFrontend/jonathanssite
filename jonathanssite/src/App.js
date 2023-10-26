import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Card(value, suit){
  this.value = value;
  this.suit = suit;
}
const suits = ['♥', '♦', '♣', '♠'];

function App() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const cards = [];
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      const newCard = new Card(j+1, i+1);
      cards.push(newCard);
    }
  }
  
  console.log(cards);
  setDeck(cards);
  }, [])

  return (
    <div className="App">
      <button onClick={() => setDeck([...deck].sort((a,b) => 0.5 - Math.random()))}>
        Blanda!
      </button>
      {
        deck.map((card, i) => <aside className={`card card-${card.suit % 2}`} key={i}>
          {
            <>
            <h1>
              {
                (card.value == 1) && 'A' || card.value
              }
            </h1>
            <h2>
            {
              suits[card.suit-1]
            }
            </h2>
            </>
          }
        </aside>)
      }
      {/* 
      ♥ ♦ ♣ ♠
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
