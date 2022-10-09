import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import "./ListItem.scss";
import Trailer from "../../Video/Trailer.mp4"
import { Link } from 'react-router-dom';

function ListItem({index}) {

  const [isHovered,setIsHovered] = useState(false)
  return (
    <div className='listItem' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={{left : isHovered && index*225-50 + index*2.5}}>
      <img src='https://wallpaperaccess.com/full/712422.jpg' alt="list_image"/>


      {isHovered && ( 
      <>
      <video id='listVideo' autoPlay='true' muted loop><source  src={Trailer} type="video/mp4" /></video>
      <div className='itemInfo'>
        <div className='icons'>
        <Link style={{"textDecoration":"none","color":"white"}} to={'/movie'}><PlayArrow className='icon'/></Link>
        <Add className='icon'/>
        <ThumbUpAltOutlined className='icon'/>
        <ThumbDownAltOutlined className='icon'/>
        </div>
      
      
      <div className='itemInfoTop'>
        <span>1hr 14min </span>
        <span className='limit'> +16 </span>
        <span> 2016 </span>
      </div>
      <div className='description'>
      In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits.As they search for answers, the children unravel a series of extraordinary mysteries.
      </div>
      <div className='genre'>Mystery · Thriller</div>
      </div>
      </>
      )}
    </div>
  )
}

export default ListItem