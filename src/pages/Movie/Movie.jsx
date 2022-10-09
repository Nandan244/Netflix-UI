import React from 'react'
import "./Movie.scss";
import Navbar from '../../components/Navbar/Navbar';
import "../../components/Navbar/Navbar.scss";
import {PlayArrow,InfoOutlined} from "@material-ui/icons"
import Title from "../../components/Featured/title.png"
import List from "../../components/List/List"
import {Link} from "react-router-dom"

function Movie() {
  return (
    <div className='movie'>
        <Navbar />
        <img className='banner'   src="https://wallpaperaccess.com/full/7859867.jpg" alt='Banner'/>
      
      <div className='movieDetails'>
      <div className='info'>
        <img src={Title} alt='Title'/>
        <div className='itemInfo'>
        <span>1hr 14min </span>
        <span className='limit'> +16 </span>
        <span> 2016 </span>
      </div>
        <span className='desc'>Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him.Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.</span>
        <div className='buttons'>
        <Link style={{"color":"white","textDecoration":"none","alignItems":"center"}} to={'/watch'}>
          <button className='play'>
            
            <PlayArrow/>
            <span>Play</span>
            
          </button>
          </Link>
          <Link style={{"color":"white","textDecoration":"none"}} to={'/watch'}>
          <button className='play'>
            <PlayArrow/>
            <span>Watch Trailer</span>
          </button>
          </Link>
          <button className='more'>
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
      </div>
      <List/>
    </div>
  )
}

export default Movie