import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'

function TitleCard({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(); // reference to card-list container

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_API_KEY'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // scroll container horizontally
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => console.error(err));

    const container = cardsRef.current;
    container.addEventListener('wheel', handleWheel);

    return () => container.removeEventListener('wheel', handleWheel); // cleanup
  }, []);

  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => (
          <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCard;
