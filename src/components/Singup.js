import React from 'react';
import { Card } from 'react-bootstrap';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default Singup =>
{
    return (
        <>
            <Card className="text-center">
                <Card.Header>Myanime List</Card.Header>
                <Card.Body>
                    <Card.Title>Singup</Card.Title>
                    <Card.Text>
                        <TextField
                            type='emial'
                            helperText="Please enter your email"
                            id="demo-helper-text-aligned"
                            label="Your Email"
                        />
                        <TextField
                            type='text'
                            helperText="Please enter your name"
                            id="demo-helper-text-aligned"
                            label="Your Name"
                        />
                        <TextField
                            type='password'
                            helperText="Please enter Your Password"
                            id="PassWord"
                            label="Password"
                        />
                    </Card.Text>
                    <Button
                        as={Link}
                        to='/'
                        color="secondary"
                        size="small"
                    >Login</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Github / Google</Card.Footer>
            </Card>
        </>
    )
}
