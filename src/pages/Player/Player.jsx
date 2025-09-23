import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTIwNzJkMThiMGQ1MjU2MDdmOTViYTMyMzRjOWQ4NSIsIm5iZiI6MTc1ODU1Mjg1OS4zMDgsInN1YiI6IjY4ZDE2MzFiMWExZDg4ZTJlZGQ0MWY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cTBoq9dSC1lLP1rNG_NvzXHIeGY4wvCdMQ_OlHy5DhM'
  }
};

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player' >
      <img src={back_arrow_icon} alt='back' className='back-icon' onClick={()=>{navigate('/')}}/>

      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>

      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
