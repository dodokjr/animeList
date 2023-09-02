import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Button } from "@mui/material";


function Series()
{
    const [seriesData, setSeriesData] = useState([]);

    const getData = async () =>
    {
        const res = await fetch(`https://api-mfikria.vercel.app/v3/lk21/dramaseries`)
        const Data = await res.json();
        setSeriesData(Data)
    }
    useEffect(() =>
    {
        getData()
    }, [])

    return (
        <>
            {seriesData.map((series) =>
            {
                return (
                    <Col className="col-lg-3 align-items-stretch">
                        <Card>
                            <Card.Img src={series.posterImg} alt="animeImage" />
                        </Card>
                        <Card.Body className="overlay">
                            <h4>{series.title}</h4>
                            <ListGroup>
                                <ListGroup.Item>Rating : {series.rating}</ListGroup.Item>
                                <ListGroup.Item>Genres : {series.genres}</ListGroup.Item>
                                <ListGroup.Item>Episode : {series.episode}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Col>
                )
            })}
        </>
    )
}


export default Series