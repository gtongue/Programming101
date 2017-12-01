import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }
  handleInput(type) {
  return (e) => {
      this.setState({[type]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  handleDemo(e){
    e.preventDefault();
    this.props.login({username: "demo", password: "password"})
      .then(() => this.props.history.push('/'));    
  }

  render() {
    return (
      <div className='signup-div'>
        <div className = 'signup-info'>
        </div>
        <form className = 'signup-form'>
          {this.props.errors ? <div className="errors"> {this.props.errors.toString()} </div>: ""}
          <h2>Sign Up</h2>
          <label htmlFor="username">
            <input 
              name = "username"
              placeholder = "Username"
              type="text"
              value= {this.state.username}
              onChange = {this.handleInput('username')}/>
          </label>
          <label htmlFor="email">
            <input 
              name = "email"
              placeholder = "Email"
              type="text"
              value= {this.state.email}
              onChange = {this.handleInput('email')}/>
          </label>
          <label htmlFor="password">
          <input 
            name = "password"
            placeholder = "Password"
            type="password"
            value= {this.state.password}
            onChange = {this.handleInput('password')}/>
          </label>

          <button onClick= {this.handleSubmit}>Sign Up</button>
          <button onClick= {this.handleDemo}>Demo</button>
        </form>
      </div>
    );
  }
}


export default Signup;