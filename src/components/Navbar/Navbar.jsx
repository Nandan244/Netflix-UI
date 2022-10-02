import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React,{useState} from 'react'
import "./Navbar.scss";

function Navbar() {
    const [isScrolled,setIsScrolled] = useState(false)

    window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset===0 ? false : true);
    return ()=>(window.onscroll=null);   
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Logo'/>
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KIDS</span>
                <Notifications className='icon'/>
                <img src='https://cdn-icons-png.flaticon.com/512/219/219986.png' alt='User Icon'/>
                <div className='profile'>
                <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar