import React from 'react';

class Account extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "account-show">
        <div className = "account-title">
          <h2>
            {this.props.user.username}
          </h2>
          <h1>
            Lines of Code: 99,423,123
          </h1>
          <h2>
            Something else
          </h2>
        </div>
        <div className = "line"/>
      </div>
    );
  }
}

export default Account;