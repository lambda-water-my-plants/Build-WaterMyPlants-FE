import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';
import './Register.css';

class Register extends React.Component {
  constructor() {
      super();
      this.state = {
          username: '',
          password: '',
          email: '',
          cell: ''
      };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePassword = e => {
     e.preventDefault();
      axios
          .post('https://watermyplantsbe.herokuapp.com/api/register', this.state)
          .then(res => {
            localStorage.setItem("token", res.data.token);
            this.props.history.push(`/lists`);
         })
         .catch(err => console.log(err))
    }



  render(){
    return(
          <Form  onSubmit={this.handlePassword} className ='login-form'>
              <input
                  className ='input-form'
                  type="text"
                  placeholder="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input
                  className ='input-form'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput}
              />
              <input
                  className ='input-form'
                  type= 'email'
                  placeholder= 'Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleInput}
              />
              <input
                  className ='input-form'
                  type= 'text'
                  placeholder= 'Cell'
                  name='cell'
                  value={this.state.cell}
                  onChange={this.handleInput}
              />

              <Button color = 'success' onClick={this.handlePassword}>Sign Up</Button>
          </Form>
    );
  }
}

export default Register;


























// import React from 'react'
//
// class Register extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userInput: '',
//       passInput: '',
//       emailInput: '',
//       numberInput: '',
//     };
//
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.handleEmailChange = this.handleEmailChange.bind(this);
//   }
//
//   handleInputChange(event) {
//     this.setState({
//       userInput: event.target.value,
//     })
//   }
//
//   handlePasswordChange(event) {
//     this.setState({
//       passInput: event.target.value
//     })
//   }
//
//   handleEmailChange(event) {
//     this.setState({
//       passInput: event.target.value
//     })
//   }
//
//   handleSubmit(event){
//     alert('A user as logged in' + this.state.userInput);
//     event.preventDafault();
//   }
//
//
//   render(){
//     return(
//       <div>
//       <form className ='input-form' onSubmit={this.addTodo}>
//         <input
//           className ='inputbox'
//           onChange={this.handleInputChange}
//           placeholder="Username"
//           value={this.state.title}
//           name="title"
//         />
//         <input
//           className ='inputbox'
//           onChange={this.handleInputChange}
//           placeholder="Password"
//           value={this.state.description}
//           name="description"
//           type="password"
//         />
//         <input
//           className ='inputbox'
//           onChange={this.handleInputChange}
//           placeholder="Email"
//           value={this.state.description}
//           name="description"
//           type="email"
//         />
//         <button className='button' type="submit">Login</button>
//       </form>
//       </div>
//     );
//   }
// }
//
// export default Register;
