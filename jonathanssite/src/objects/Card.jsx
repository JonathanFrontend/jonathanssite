import React from 'react';
import { suits } from '../App';

function GameCard({suit, value, notVisible}) {
  return (
    <aside className={`card card-${suit} ${notVisible && 'not-visible'}`} onClick={() => {console.log('ddd')}}>
          {
            <>
                <h1>
                {
                (
                    (value == 14) && 'A' || 
                    (value == 11) && 'J' ||
                    (value == 12) && 'Q' ||
                    (value == 13) && 'K' 
                ) || value
                }
                </h1>
                <h2>
                {
                    suits[suit-1]
                }
                </h2>
            </>
          }
        </aside>
  )
}

export default GameCard