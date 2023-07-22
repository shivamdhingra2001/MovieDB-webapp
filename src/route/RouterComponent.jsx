import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from'../containers/home/Home'
import About from'../containers/about/About'
import Movies from'../containers/movies/Movies'
import TVSeries from'../containers/tvseries/TVSeries'
import Search from'../containers/search/Search'
import Details from '../containers/details/Details';
import Contact from  '../containers/contact/Contact'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const RouterComponent = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/Series" element={<TVSeries/>}/>
            <Route path="/Search" element={<Search/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Details/:movieid/:mediatype" element={<Details/>}/>
            
        </Routes> 
  <Footer/>
    </BrowserRouter>
    </>
  )
}

export default RouterComponent