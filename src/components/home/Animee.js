import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Button } from "@mui/material";


function Animee()
{
    const [animeData, setAnimeData] = useState([]);

    const getData = async () =>
    {
        const res = await fetch(`https://api-mfikria.vercel.app/v2/anime`)
        const resData = await res.json();
        setAnimeData(resData.data)
    }
    useEffect(() =>
    {
        getData()
    }, [])
    return (
        <>
            {animeData.map((anime) =>
            {
                return (
                    <Col className="col-lg-3 align-items-stretch">
                        <Card>
                            <Card.Body>{anime.rank}</Card.Body>
                            <Card.Img src={anime.images.jpg.large_image_url} alt="animeImage" />
                        </Card>
                        <Card.Body className="overlay">
                            <h4>{anime.title}</h4>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Status :{anime.status}</ListGroup.Item>
                                <ListGroup.Item>myanimelist :<Button color="secondary" size="small" variant="text" href={anime.url} target={"_blank"}>{anime.title}</Button></ListGroup.Item>
                            </ListGroup>
                            {anime.aired.string}
                        </Card.Body>
                        <Card.Body>
                        </Card.Body>
                    </Col>
                )
            })}
        </>
    )
}

export default Animee