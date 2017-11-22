import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount()
  {
    $(".hamburger").click(() => {
      if (  $(".hamburger").css( "transform" ) === 'none' ){
        this.openMenu();
      } else {
        this.closeMenu();
      }
    });
  }

  openMenu()
  {
    let hamburger =  $(".hamburger-menu");         
    $(".hamburger").css("transform","rotate(90deg)");
    hamburger.css("transform", "translate(-25px, 0)");
  }

  closeMenu()
  {
    let hamburger =  $(".hamburger-menu");                  
    $(".hamburger").css("transform","none");
    hamburger.css("transform", "translate(-350px, 0)");
  }

  render(){
    let { currentUser, logout } = this.props;
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
        {/* <div>asdas</div> */}
        <div className = "title">
          <i className ="fa fa-bars fa-lg hamburger" aria-hidden="true"></i>
          <div className = "hamburger-menu">
            <Link to = '/' 
                  className = "hamburger-link"
                  onClick = {this.closeMenu}> Home </Link>
            <Link to = '/' 
                  className = "hamburger-link"
                  onClick = {this.closeMenu}> My Account </Link>
            <Link to = '/challenge' 
                  className = "hamburger-link"
                  onClick = {this.closeMenu}> Challenges </Link>
          </div>
          <label className = "nav-bar-title1">Programming</label>
          <label className = "nav-bar-title2">101</label>
        </div>
        <div className = "session-display">
          {display}
        </div>
      </header>
    );
  }
}

export default Header;