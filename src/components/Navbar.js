import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Toggle from './Toggle';
import Exit from '../images/exit.svg';
import Menu from '../images/menu.svg';
import DarkMode from '../images/darkmode.svg';
import LightMode from '../images/lightmode.svg';
import '../App.css'

const Navbar = ({backG, setBackG}) => {
    const [menu, setMenu] = useState(false);
    return (
    <NavBarStyle menu={menu}>
        <h2 style={{color: backG? '#FFF': 'rgb(36, 35, 35'}}>THE <span>MOVIE</span> HUB</h2>
        <nav>
            <img id="menu" src={Menu} alt="menu box" onClick={()=> setMenu(!menu)}/>
            <ul>
                <img id="exit" src={Exit} alt="exitbox" onClick={()=> setMenu(!menu)}/>
                <li className="mode" id="dark-mode" onClick={()=> setBackG(!backG)} style={{cursor: 'pointer', color: backG? '#FFF': 'rgb(36, 35, 35'}}><img style={{width: '30px'}} src={`${backG? LightMode: DarkMode}`} alt="mode-switch"/></li>
                <Toggle>
                <li id="top-mode"><Link to='/trending'>TOP RATED MOVIES</Link></li>
                <li id="top"><Link to='/'>POPULAR</Link></li>
                </Toggle>
            </ul>
        </nav>
    </NavBarStyle>
  )
}

const NavBarStyle = styled.div`

	display: flex;
	justify-content: space-between;
	margin: 1rem;
	padding: 1rem .5rem;
    a{
	text-decoration: none;
	color: rgb(93, 90, 90);
	margin: 0;
    }   
    #nav{
	    display: flex;
    }
    #menu{
        display:none;
    }
    nav{
        img{
            display: none;
        }
        ul{
            display: flex;
            justify-content: space-between;
        
        }
        li{
            list-style: none;
            margin:0 2rem;
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 685px){
        #menu{
            color: 'blue'; 
            display: ${({menu})=> menu? 'none': 'block'};
            width: 25px;
            margin: 0;
        }
        #exit{
            display: ${({menu})=> menu? 'block': 'none'}; 
            width: 25px;
        }
	nav{
        ul{
            display: ${({menu})=> menu? 'block': 'none'};
            #top{
                margin: 0 1.5rem;
            }
            li{
                font-size: 1.5rem;
                margin:1.5rem 0;
            }
        }
    }
}
`
export default Navbar