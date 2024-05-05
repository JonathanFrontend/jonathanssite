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
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const cards = [];
  
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 14; j++) {
      const newCard = new Card(j+1, i+1);
      cards.push(newCard);
    }
  }

  setDeck(cards);
  }, [])

  useEffect(() => {
    console.log(playerCards);
    let counter = 0;
    for (const c of [...playerCards]) {
      counter = counter + c.value;
    }
    if (counter === 21) {
      alert("du vann!");
      setShowAll(true);
    } else if (counter > 21) {
      alert("du förlorade!");
      setShowAll(true);
    }

    console.log("counter",counter);

    let deckCopy = [...deck];
    let randomDeckIndex = Math.floor(Math.random() * deck.length);
    let randomCard = deckCopy.splice(randomDeckIndex, 1);
    setDealerCards([...dealerCards].concat(randomCard));

  }, [playerCards])

  useEffect(()=>{
    console.log(playerCards);
    console.log(dealerCards);
  })
  let card = deck[0];
  
  return (
    <div className="App">
      {/* {
        (
          () => {
            console.log(playerCards);
            let counter = 0;
            for (const c of [...playerCards]) {
              counter = counter + c.value;
            }
            if (counter === 21) {
              prompt("du vann!");
            } else if (counter > 21) {
              prompt("du förlorade!");
            }
            console.log("counter",counter);
          }
        )()
      } */}
      {
        (
          () =>
            {
              console.log(dealerCards)
            }
        )()
      }
      <button onClick={() => setDeck([...deck].sort((a,b) => 0.5 - Math.random()))}>
        Mix!
      </button>
      <button onClick={() => { 
        let deckCopy = [...deck];
        let randomDeckIndex = Math.floor(Math.random() * deck.length);
        let randomCard = deckCopy.splice(randomDeckIndex, 1);
        setPlayerCards([...playerCards].concat(randomCard));
        setDeck(deckCopy);
        
       }}>
        Draw!
      </button>
      <button onClick={() => {
        let pCounter = 0;
        for (const c of [...playerCards]) {
          pCounter = pCounter + c.value;
        }
        if (pCounter === 21) {
          alert("du vann!");
          setShowAll(true);
        } else if (pCounter > 21) {
          alert("du förlorade!");
          setShowAll(true);
        } else {
            let dCounter = 0;
            for (const c of [...dealerCards]) {
            dCounter = dCounter + c.value;
          }
            console.log("pCounter",pCounter);
            console.log("dCounter",dCounter);
            if (dCounter > pCounter){
              alert("du förlorade!");
              setShowAll(true);
            } else if (dCounter < pCounter) {
              alert("du vann!");
              setShowAll(true);
            } else if (dCounter == pCounter) {
              alert("jämnt!");
              setShowAll(true);
            } else {
              alert("jämnt!");
              setShowAll(true);
            }
        }
       }}>
        Play!
      </button>
    <main className='table'>
    <ul>
      {
        dealerCards.map((c, i) => <li key={i}>
          <GameCard suit={c.suit} value={c.value} notVisible={(showAll ? !showAll : i)}/>
        </li>)
      }
    </ul>
    <ul>
      {
        playerCards.map((c, i) => <li key={i} onClick={() => console.log('test')}>
          <GameCard suit={c.suit} value={c.value}/>
      </li>)
      }
    </ul>
    </main>
    
    </div>
  );
}

export default App;
