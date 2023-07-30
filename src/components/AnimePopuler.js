import { useState, useEffect } from "react"
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";


function AnimePopuler()
{
    const [animeData, setAnimeData] = useState([]);

    const getData = async () =>
    {
        const res = await fetch(`https://api-mfikria.vercel.app/v2/anime/populer`)
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
                            <Card.Img src={anime.images.jpg.large_image_url} alt="animeImage" />
                        </Card>
                        <Card.Body>
                            <h4>{anime.title}</h4>
                            <ListGroup>
                                <ListGroup.Item>Status :{anime.status}</ListGroup.Item>
                                <ListGroup.Item>Genres :{anime.genres.name}</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body>
                        </Card.Body>
                    </Col>
                )
            })}
        </>
    );

}

export default AnimePopuler