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
        <div className='session-form'>
        <h2>Login</h2>
        <form>
          <label htmlFor="">
          Username
          <input 
            type="text"
            value= {this.state.username}
            onChange = {this.handleInput('username')}/>
          </label>
          <label htmlFor="">
          Password
          <input 
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