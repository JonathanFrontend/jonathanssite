import './App.css';
import { useEffect, useState } from 'react';
import GameCard from './objects/Card';

function Card(value, suit){
  this.value = value;
  this.suit = suit;
}
export const suits = ['♥', '♦', '♣', '♠'];

function App() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const cards = [];
  
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 14; j++) {
      const newCard = new Card(j+1, i+1);
      cards.push(newCard);
    }
  }
  
  console.log(cards);
  console.log(cards.length);

  setDeck(cards);
  }, [])

  let card = deck[0];
  
  return (
    <div className="App">
      <button onClick={() => setDeck([...deck].sort((a,b) => 0.5 - Math.random()))}>
        Blanda!
      </button>
      {/* {
        deck.map((card, i) => <aside className={`card card-${card.suit}`} key={i}>
          {
            <>
            <h1>
              {
              (
                (card.value == 14) && 'A' || 
                (card.value == 11) && 'J' ||
                (card.value == 12) && 'Q' ||
                (card.value == 13) && 'K' 
              ) || card.value
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
      } */}
    {
      card && <GameCard suit={card.suit} value={card.value}/>
    }
    </div>
  );
}

export default App;
