import React from 'react'
import './header.css';

const Header = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg " style={{
      backgroundColor:"#eaeaea",
    }}>
    <div class="container ">
      <a class="navbar-brand" href="#" style={{color:"black"}}>Flex Business Pro</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i class="fa fa-bars"></i>
  </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto w-100 justify-content-end">
          <li class="nav-item active">
            <a class="nav-link" href="#" style={{color:"black"}}>Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:"black"}}>About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"black"}}>Styleguide</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color:"black"}}>Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{color:"black"}}>Contact</a>
                </li>
        </ul>
      </div>
    </div>
  </nav>
      
  )
}

export default Header