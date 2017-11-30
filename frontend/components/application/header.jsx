import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleHamburger = this.handleHamburger.bind(this);
    this.open = false;
  }
  componentDidMount()
  {
    $(".app").click( evt => {
      if(this.open && !evt.target.className.includes("hamburger")){
        this.closeMenu();
      }
    });
  }

  componentWillUnmount()
  {
    $(".app").off("click");
  }

  handleHamburger()
  {
    let hamburger = $('.hamburger');
    if (  hamburger.css( "transform" ) === 'none' ){
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  openMenu()
  {
    let menu =  $(".hamburger-menu");         
    $(".hamburger").css("transform","rotate(90deg)");
    menu.css("transform", "translate(-26px, 0)");
    $(".opaque").css("opacity", ".5");
    this.open = true;
  }

  closeMenu()
  {
    let menu =  $(".hamburger-menu");                  
    $(".hamburger").css("transform","none");
    menu.css("transform", "translate(-350px, 0)");
    $(".opaque").css("opacity", "0");    
    this.open = false;
  }

  render(){
    let { currentUser, logout } = this.props;
    console.log(this.props);
    const display = currentUser ?  (
      <div className = "user-info">
        <p>Hello, {currentUser.username} </p>
        <button onClick = {logout}>Logout </button>
      </div>
    )
    :(
      <div className = "user-info">
        <Link className = "nav-links" to="/signup"> Sign Up </Link>
        <Link className = "nav-links" to="/login"> Log In </Link>
      </div>
    );

    return (
      <header className = "nav-bar">
        <div className = "opaque" />
        <div className = "title">
          {currentUser ? 
              <i className ="fa fa-bars fa-lg hamburger" aria-hidden="true" onClick = {this.handleHamburger}></i>

            : ""}
          {currentUser ? 
                        <div className = "hamburger-menu">
                        <Link to = '/' 
                              className = "hamburger-link"
                              onClick = {this.closeMenu}> Home </Link>
                        <Link to = {`/users/${currentUser.id}`}
                              className = "hamburger-link"
                              onClick = {this.closeMenu}> My Account </Link>
                        <Link to = '/challenges' 
                              className = "hamburger-link"
                              onClick = {this.closeMenu}> Challenges </Link>
                      </div> : ""}
          <label className = "nav-bar-title1">Programming</label>
          <label className = "nav-bar-title2">200</label>
        </div>
        <div className = "session-display">
          {display}
        </div>
      </header>
    );
  }
}

export default Header;