import { useState, useEffect } from 'react';
import
{
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Animee from './Animee';


export default Home =>
{
    return (
        <>
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