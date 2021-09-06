import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MovieScreen = ({movies}) => {
    const params=useParams();
    console.log(params)
    const movie=movies.find((el) => el.id == params.id);



    return (
        <div style={{marginTop:"15px"}}>
        
        <Container>
        <Row>
        <img style={{with:"600px"}} src={movie.posterurl} alt={movie.name}/> 
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>

        </Row>

        </Container>
        
        
        </div>
    )
}

export default MovieScreen;
