import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Button } from "@mui/material";


function Movie()
{
    const [movieData, setMovieData] = useState([]);

    const getData = async () =>
    {
        const res = await fetch(`https://api-mfikria.vercel.app/v3/lk21/movies`)
        const Data = await res.json();
        setMovieData(Data)
    }
    useEffect(() =>
    {
        getData()
    }, [])

    return (
        <>
            {movieData.map((movie) =>
            {
                return (
                    <Col className="col-lg-3 align-items-stretch">
                        <Card>
                            <Card.Img src={movie.posterImg} alt="animeImage" />
                        </Card>
                        <Card.Body className="overlay">
                            <h4>{movie.title}</h4>
                            <ListGroup>
                                <ListGroup.Item>Rating : {movie.rating}</ListGroup.Item>
                                <ListGroup.Item>Genres : {movie.genres}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Col>
                )
            })}
        </>
    )
}


export default Movie