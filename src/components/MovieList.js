import React, { useState } from 'react';
//import MovieCard from './MovieCard';
//import movie from './Movie';
import "../App.css"
import Movie from './Movie';




const MovieList = ({movies}) => {
 /* const [text, settext] = useState("");
  const [rate, setrate] = useState("");
const filterText=(text)=>{
  settext(text)
}
*/
  return (
    <div>
        <div className="movies" >
        {movies.map((el)=>(<Movie movie={el} />))}
    </div>
    </div>
  );
}
export default MovieList;