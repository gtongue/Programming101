import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(newProps)
  {
    console.log(newProps);
  }
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='session-div'>
        <form className = 'session-form'>
          {this.props.errors ? <div className="errors"> {this.props.errors.toString()} </div>: ""}
          <h2>Login</h2>
          <label htmlFor="username">
            <input 
            name = "username"
            placeholder = "Username"
            type="text"
            value= {this.state.username}
            onChange = {this.handleInput('username')}/>
          </label>

          <label htmlFor="password"> 
            <input 
            name = "password"    
            placeholder = "Password"                   
            type="password"
            value= {this.state.password}
            onChange = {this.handleInput('password')}/>
          </label>



          <button onClick= {this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}


export default Login;