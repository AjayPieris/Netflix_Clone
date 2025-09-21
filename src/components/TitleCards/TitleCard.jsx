import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'

function TitleCard({title, category}) {

  const cardsRef = useRef(); // reference to card list box

const handleWheel = (event) => {
  event.preventDefault(); // stop normal up/down scroll
  cardsRef.current.scrollLeft += event.deltaY; // scroll left/right instead
}

useEffect(() => {
  cardsRef.current.addEventListener('wheel', handleWheel); // run handleWheel when wheel moves
}, []); // run only once

  return (
    <div className='title-card'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list'>
        {cards_data.map((card, index)=>{
          return <div className='card' key={index} ref={cardsRef}>
            <img src={card.image} alt=''/>
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard;

