
import { useState } from 'react'
import movies from './data/movies'
import MovieCard from './components/MovieCard'
import MovieDetail from './components/MovieDetail'

function App() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')
  const [year, setYear] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === 'All' || m.genre === genre) &&
    (year === 'All' || m.year === year)
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 Movie Review App</h1>

      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          type="text"
          placeholder="Search movie..."
          className="p-2 border"
          onChange={e => setSearch(e.target.value)}
        />

        <select className="p-2 border" onChange={e => setGenre(e.target.value)}>
          <option>All</option>
          <option>Action</option>
          <option>Sci-Fi</option>
          <option>Drama</option>
        </select>

        <select className="p-2 border" onChange={e => setYear(e.target.value)}>
          <option>All</option>
          <option>2008</option>
          <option>2010</option>
          <option>2014</option>
        </select>
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelect={setSelected} />
          ))}
        </div>
      ) : (
        <MovieDetail movie={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  )
}

export default App
