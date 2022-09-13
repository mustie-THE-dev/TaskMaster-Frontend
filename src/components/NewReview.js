import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function NewReview( {pokemon_id} ) {

    const [text, setText] = useState("")
    const [rating, setRating] = useState("")

    const { id } = useParams();
    const [errors, setErrors] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                pokemon_id,
                rating,
            }),
        }).then((r) => {
            if(r.ok) {
                window.location.reload();
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    console.log(pokemon_id)

  return (
    <div >
        <h3>Create Review</h3>
        <form onSubmit={handleSubmit} id={pokemon_id}>
                <label htmlFor='text'></label>
                <textarea
                    type="text"
                    id="text"
                    rows="10"
                    placeholder="Comment here..."
                    onChange={(e) => setText(e.target.value)}
                 />
                 <br></br>
                 <input
                    type="text"
                    id="rating"
                    placeholder="Rating"
                    onChange={(e) => setRating(e.target.value)}
                 />
                <button type="submit" className='btn'>
                    Submit
                </button>
                <div>{errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}</div>
        </form>
    </div>
  )
}
export default NewReview;