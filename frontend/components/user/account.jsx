import React from 'react';

class Account extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "account-show">
        Hello There! {JSON.stringify(this.props.user)}
      </div>
    );
  }
}

export default Account;