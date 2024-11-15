// create a component that displays a random quote each time it is rendered.


import React from 'react'

const RandomQuote = () => {

   let quotes =["Your self-worth is determined by you. You don't have to depend on someone telling you ","Nothing is impossible. The word itself says 'I'm possible!' — Audrey Hepburn."

   ];
   const randomIndex = Math.floor(Math.random()*quotes.length);
   const quote =quotes[randomIndex];
  return (
    <div>
    {quote}

      
    </div>
  )
}

export default RandomQuote
