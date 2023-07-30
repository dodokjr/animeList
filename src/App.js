import { useState, useEffect } from 'react';
import Header from './components/Header';
import AnimePopuler from './components/AnimePopuler';
import { AnimeList } from "./components/AnimeList";
import { AnimeInfo } from './components/AnimeInfo';
import { AddToList } from "./components/AddToList";
import { RemoveFromList } from "./components/RemoveFromList";
import { TextField, Grid } from '@mui/material';
import Carousele from './components/Carousele';
import
{
  Container,
  Row,
  Col
} from "react-bootstrap";
import './assets/css/main.css.map'

function App()
{

  const [search, setSearch] = useState('Naruto')
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState()
  const [myAnimeList, setMyAnimeList] = useState([])

  const addTo = (anime) =>
  {
    const index = myAnimeList.findIndex((myanime) =>
    {
      return myanime.mal_id === anime.mal_id
    })
    if (index < 0)
    {
      const newArray = [...myAnimeList, anime]
      setMyAnimeList(newArray);
    }

  }
  const removeFrom = (anime) =>
  {
    const newArray = myAnimeList.filter((myanime) =>
    {
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  const getData = async () =>
  {
    const res = await fetch(`https://api-mfikria.vercel.app/v2/anime/${search}`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }
  useEffect(() =>
  {
    getData()
  }, [search])

  return (
    <>
      <Header />
      <Carousele />
      <div className="mb-3">
        <h2 style={{ fontFamily: "Poppins" }} className=" mt-5 text-center">
          {"Anime Populer"}
        </h2>
      </div>
      <Container fluid>
        <Row className='g-4'>
          <AnimePopuler />
        </Row>
      </Container>
      <Container fluid>
        <div className="mb-3">
          <h2 style={{ fontFamily: "Poppins" }} className="mt-5 text-center">
            {"Anime List"}
          </h2>
        </div>
        <TextField id="standard-basic" label="Search" variant="standard" type="search" className='justify-content-md-center'
          placeholder="Search for an anime..."
          required
          onChange={(e) => setSearch(e.target.value)} />
        <hr />
        <Row className='g-4'>
          <AnimeList
            animelist={animeData}
            setAnimeInfo={setAnimeInfo}
            animeComponent={AddToList}
            handleList={(anime) => addTo(anime)}
          />
        </Row>
      </Container>

      <Container>
        <div className="mb-3">
          <h2 style={{ fontFamily: "Poppins" }} className="container mt-5">
            {"Anime Set"}
          </h2>
        </div>
        <Row className='g-4'>
          <AnimeList
            animelist={myAnimeList}
            setAnimeInfo={setAnimeInfo}
            animeComponent={RemoveFromList}
            handleList={(anime) => removeFrom(anime)}
          />
        </Row>
      </Container>
    </>
  );
}

export default App;
