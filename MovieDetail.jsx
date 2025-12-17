
import { useState } from 'react'

function MovieDetail({ movie, onBack }) {
  const [rating, setRating] = useState(0)

  return (
    <div className="bg-white p-6 rounded shadow">
      <button onClick={onBack} className="text-blue-600 mb-3">← Back</button>
      <img src={movie.poster} className="h-80 mb-4 rounded" />
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p className="text-gray-600">{movie.description}</p>
      <p className="mt-2">{movie.genre} • {movie.year}</p>

      <div className="mt-4">
        <p className="font-semibold">Rate this movie:</p>
        {[1,2,3,4,5].map(star => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={star <= rating ? "text-yellow-400 text-2xl cursor-pointer" : "text-gray-400 text-2xl cursor-pointer"}>
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

export default MovieDetail
