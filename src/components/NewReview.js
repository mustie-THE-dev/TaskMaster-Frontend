import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewReview({ pokemon_id, handleUpdate }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState([]);

  console.log(id);

  function handleText(e) {
    setText(e.target.value);
  }

  function handleRatings(e) {
    setRating(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/add_reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        pokemon_id: id,
        rating: rating,
      }),
    }).then((r) => {
      if (r.ok) {
        // window.location.reload();
        setText("");
        setRating("");
        handleUpdate();
        alert("Succesfull");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  console.log(pokemon_id);

  return (
    <div>
      <h3>Create Review</h3>
      <form onSubmit={handleSubmit} id={pokemon_id}>
        <label htmlFor="text"></label>
        <textarea
          type="text"
          value={text}
          id="text"
          rows="10"
          placeholder="Comment here..."
          onChange={handleText}
        />
        <br></br>
        <input
          type="text"
          value={rating}
          id="rating"
          placeholder="Rating"
          onChange={handleRatings}
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <div>
          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}
        </div>
      </form>
    </div>
  );
}
export default NewReview;
