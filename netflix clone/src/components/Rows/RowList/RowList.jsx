import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utils/requests"
const RowList = () => {
  return (
    <>
    <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
    />
    <Row
    title={"TRENDING NOW"}
    fetchUrl={requests.fetchTrending}
    />
  <Row title={"Top Rated"} fetchUrl={requests.fetchTopRatedMovies}/>
  <Row title={"Action movies"} fetchUrl={requests.fetchActionMovies}/>
  <Row title={"Comedy movies"} fetchUrl={requests.fetchComedyMovies}/>
  <Row title={"Horror movies"} fetchUrl={requests.fetchHorrorMovies}/>
  <Row title={"Romance movies"} fetchUrl={requests.fetchRomanceMovies}/>
  <Row title={"Tv Shows"} fetchUrl={requests.fetchTvShow}/>
  <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}/>


    </>
    
  )
}

export default RowList