import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import {Link} from 'react-router-dom'


function TitleCard({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(); // reference to card-list container

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTIwNzJkMThiMGQ1MjU2MDdmOTViYTMyMzRjOWQ4NSIsIm5iZiI6MTc1ODU1Mjg1OS4zMDgsInN1YiI6IjY4ZDE2MzFiMWExZDg4ZTJlZGQ0MWY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cTBoq9dSC1lLP1rNG_NvzXHIeGY4wvCdMQ_OlHy5DhM'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // scroll container horizontally
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
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
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt='' />
            <p>{card.original_title}</p>
          </Link>
})}
      </div>
    </div>
  )
}

export default TitleCard;
