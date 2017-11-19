import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
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
        <div>
          {display}
        </div>
      </header>
    );
  }
}

export default Header;