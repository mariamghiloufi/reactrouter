import React from 'react'
import  {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Movie = ({movie}) => {
  
    return (
        <div>
          <Link to={`/movie/${movie.id}`}>
            <Card style={{ width: '18rem' }}>
  <Card.Img src={movie.posterurl}  alt={movie.name} variant="top" />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Link>
        </div>
    )
}

export default Movie;

