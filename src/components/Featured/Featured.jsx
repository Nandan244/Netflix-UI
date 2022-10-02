import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React, { useState } from 'react';
import Trailer from "../../Video/Banner_trailer.mp4"
import Title from "./title.png"
import "./Featured.scss";

function Featured({type}) {
  const [isHovered,setIsHovered] = useState(false)
  return (
    <div className='featured' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      {type && (
        <div className='category'>
          <span>{type==="movies"?"Movies":"Series"}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value="Family">Family</option>
            <option value="Thriller">Thriller</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Western">Western</option>
            <option value="Drama">Drama</option>
          </select>
        </div>
      )}
      {isHovered && (
        <video id='bannerVideo' progress muted autoPlay loop><source src={Trailer} type="video/mp4"/></video>
      )}
      <img className='banner'   src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fbfe8959-9690-4e47-842d-750e77d2c4dd/dee93qk-4e6daa86-e432-493e-8009-b87b302c963f.png/v1/fill/w_1192,h_670,q_70,strp/spider_verse_style_sam_raimi_black_suit_spider_man_by_glitchedlizardda_dee93qk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcL2ZiZmU4OTU5LTk2OTAtNGU0Ny04NDJkLTc1MGU3N2QyYzRkZFwvZGVlOTNxay00ZTZkYWE4Ni1lNDMyLTQ5M2UtODAwOS1iODdiMzAyYzk2M2YucG5nIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gPZlNKv2h2k3M_t3THCERGrI7-I_CDaR6krdeqIUSUg" alt='Banner'/>
      
      <div className='info'>
        <img src={Title} alt='Title'/>
        <span className='desc'>Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him.Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured