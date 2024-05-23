import { Component } from "react";
import "./NavbarStyles.css"
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import SignUp from "../routes/SignUp";

class Navbar extends Component
{
    state = {clicked:false}
    handleClick=()=>
    {
        this.setState({clicked: !this.state.clicked})
    }
    render()
    {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">SR Trip Planner</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                   
                </div>

                <ul className="nav-menu">
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                        <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
                    
                     </li>
                        )
                    })}
                    {/* <button>Sign Up</button/ */}
                    
                     
                </ul>

            </nav>
        )
    }
}
export default Navbar;