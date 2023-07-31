import React from 'react';
import { Card } from 'react-bootstrap';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default Login =>
{
    return (
        <>
            <Card className="text-center">
                <Card.Header>Myanime List</Card.Header>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                        <TextField
                            type='text'
                            helperText="Please enter your name or email"
                            id="demo-helper-text-aligned"
                            label="Your Name Or Email"
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
                    Or
                    <Button color='secondary' size='small' as={Link}
                        to='/singup'>Singup</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Github / Google</Card.Footer>
            </Card>
        </>
    )
}
