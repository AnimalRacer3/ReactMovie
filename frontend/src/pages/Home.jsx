import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", year: 2014, url: "", rating: 8.5},
        {id: 2, title: "The Dark Knight", year: 2008, url: "", rating: 9},
        {id: 3, title: "Inception", year: 2010, url: "", rating: 8},
    ]

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home;