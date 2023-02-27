import React from "react";
import {Link, NavLink} from 'react-router-dom'; //импортируем нужные компоненты
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/"> {/*to  говорит куда идти*/}
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>   {/* activeStyle={{'color': '#9f0013'}}  это старая запись стайла*/}
                 {/*тут линки нам помогают сориентироваться в том куда будет идти линка, на какой компонент*/}
                    <li><NavLink end  style={({isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})} to="/">Characters</NavLink></li> 
                    {/*navlink делает стилизацию активной ссылки и эктив стайл помогает делать стили*/}
                    <li><NavLink end  style={({isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})} to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;