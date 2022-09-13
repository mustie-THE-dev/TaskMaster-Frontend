import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ReviewFeed from './ReviewFeed';
import NewReview from './NewReview';


function Pokemon() {

    const [pokemon, setPokemon] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/pokemon/${id}`)
            .then((r) => r.json())
            .then(setPokemon);
    }, []);

    const [reviews, setReviews] = useState([])

    const getProfile = async () => {
        const response = await fetch(`http://localhost:9292/pokemon/${id}/reviews`);
        const data = await response.json();
        setReviews(data.reviews);
      };

    useEffect(() => {
        getProfile();
    }, []);

  return (
    <div>
      <div className='card'>
        <h1>{pokemon.name}</h1>
        <p><strong>Location:</strong> <em>{pokemon.location}</em></p>
        <p><strong>Signature Move:</strong> <em>{pokemon.move}</em></p>
      </div>
      <div>
          <ReviewFeed reviews={reviews} />
      </div>
      <div className='comment-body'>
          <NewReview pokemon_id={pokemon.id} />
      </div>
    </div>
  )
}

export default Pokemon;