import { Grid } from '@mui/material';
import { Col, Card, ListGroup } from 'react-bootstrap';
import React from 'react'

export const AnimeList = ({ animelist, setAnimeInfo, animeComponent, handleList }) =>
{
  const AddToList = animeComponent;
  return (
    <>
      {
        animelist ? (
          animelist.map((anime, index) =>
          {
            return (
              <>
                <Col className="col-lg-3 align-items-stretch" key={index} onClick={() => setAnimeInfo(anime)}>
                  <Card>
                    <Card.Img src={anime.images.jpg.large_image_url} alt="animeImage" />
                  </Card>
                  <Card.Body>
                    <h4>{anime.title}</h4>
                    <div className="overlay" onClick={() => handleList(anime)}>
                      <h4>{anime.title_japanese}</h4>
                      <h3>SYNOPSIS</h3>
                      <div className="synopsis">
                        <p>{anime.synopsis}</p>
                      </div>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                  <Card.Body>
                    <AddToList />
                  </Card.Body>
                </Col>
              </>
            )
          })
        ) : "Not Found"
      }

    </>
  )
}
