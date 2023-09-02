import { Button } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import
{
    AiFillGithub
} from "react-icons/ai";

function Footer()
{
    let date = new Date();
    let year = date.getFullYear();
    return (
        <>
            <Container fluid className="footer">
                <Row>
                    <section>
                        <footer className="text-center text-white">
                            <div className="container p-4 pb-0">
                                <Button variant="outlined" href="https://api-mfikria.vercel.app/github"><AiFillGithub /> My Repos</Button>
                            </div>
                            <div className="text-center p-3">
                                Copyright © {year} :
                                <a class="text-white" href="https://api-mfikria.vercel.app/website">Mfikria</a>
                            </div>
                        </footer>
                    </section>
                </Row>
            </Container>
        </>
    );
}

export default Footer;
