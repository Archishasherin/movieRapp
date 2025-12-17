
function MovieCard({ movie, onSelect }) {
  return (
    <div onClick={() => onSelect(movie)}
      className="bg-white p-4 rounded shadow cursor-pointer">
      <img src={movie.poster} className="h-64 w-full object-cover rounded" />
      <h2 className="text-xl mt-2 font-semibold">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.genre} • {movie.year}</p>
    </div>
  )
}
export default MovieCard
