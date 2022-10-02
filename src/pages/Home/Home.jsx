
import React, { useState } from 'react'
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import Navbar from '../../components/Navbar/Navbar';
import "./Home.scss";

function Home() {
  
  
  return (
    <div className='home'>

    <Navbar/>
    <Featured type="movies"/>
    <List/>
    <List/>
    <List/>
    <List/>
    <List/>
    
    </div>
  )
}

export default Home