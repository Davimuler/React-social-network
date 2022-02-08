import React from  'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav=()=>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/Profile'} className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div >
                <NavLink to={'/Messages'} className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div >
            <div >
                <NavLink to={'/News'} className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div >
                <NavLink to={'/Musik'} className = { navData => navData.isActive ? s.active : s.item }>Musik</NavLink>
            </div>
        </nav>
    );
}
export default Nav;