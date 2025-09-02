import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/tags/Tags";

export default function Home()
{

    let [movies,setMovies] = useState([]);
    let [featuredMovies,setFeaturedMovies] = useState([])
    let [dramaMovies,setDramaMovies] = useState([])
    let [hindiMovies,setHindiMovies] = useState([])
    let [topMovies,setTopMovies] = useState([])
    let [japaneseMovies,setJapaneseMovies]=useState([])

    useEffect(() => {
  const fetchMovies = async () => {
    try {
      let movieResponse = await fetch("http://localhost:3000/movies");
      let moviesData = await movieResponse.json();

      setMovies(moviesData);

      let featMovies = moviesData.filter(movie => movie.featured === true);
      setFeaturedMovies(featMovies.slice(0, 4));

      let draMovies = moviesData.filter(movie => movie.genre.includes("Drama"));
      setDramaMovies(draMovies.slice(0, 6));

      let hinMovies = moviesData.filter(movie => movie.language === "Hindi");
      setHindiMovies(hinMovies.slice(0, 6));

      let topRatedMovies = moviesData.filter(movie => movie.imdb >= 8.5);
      setTopMovies(topRatedMovies.slice(0, 6));

      let japanMovies = moviesData.filter(movie => movie.country === "Japan");
      setJapaneseMovies(japanMovies.slice(0, 6));
    } catch (err) {
      console.log(err);
    }
  };

  fetchMovies();
}, []);



    return (
        <>
            <Header movies = {movies}/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Featured movies={featuredMovies}/>

            <Shows title="Drama Movies" movies={dramaMovies}/>
            <Shows title="Hindi Language Movies" movies={hindiMovies}/>
            <Shows title="Highly Rated Movies" movies={topMovies}/>
            {/* <Shows title="Japaneses Movies" movies={japaneseMovies}/> */}
        </>
    )
}