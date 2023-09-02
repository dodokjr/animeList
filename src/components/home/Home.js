import { useState, useEffect } from 'react';
import
{
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Movie from './Movie';
import Animee from './Animee';
import Series from './Series'


export default Home =>
{
    return (
        <>
            <Container fluid>
                <div className='text-center'><h4>Movies</h4></div>
                <Row className='g-4'>
                    <Movie />
                </Row>
            </Container>
            <hr />
            <Container fluid>
                <div className='text-center'><h4>DramaSeries</h4></div>
                <Row className='g-4'>
                    <Series />
                </Row>
            </Container>
            <hr />
            <Container fluid>
                <div className='text-center'><h4>Anime</h4></div>
                <Button as={Link} to='/anime'>Anime</Button>
                <Row className='g-4'>
                    <Animee />
                </Row>
            </Container>
        </>
    )
}