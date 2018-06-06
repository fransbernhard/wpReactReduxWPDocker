import {Link} from 'react-router-dom'
import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <header>
        <nav>
          <ul className="menu-ul">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/wordpress"}>Wordpress</Link></li>
            <li><Link to={"/info"}>Info</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/filter"}>Filter</Link></li>
            <li><Link to={"/scroll"}>Scroll</Link></li>
            <li><Link to={"/firebase"}>Firebase</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
