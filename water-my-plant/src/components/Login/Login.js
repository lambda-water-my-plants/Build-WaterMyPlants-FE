import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';
import './Login.css';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        credentials: {
          username: '',
          password: '',
        }
      };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.credentials)
  }

  login = e => {
    e.preventDefault();
    console.log('inside the login function')
    axios.post('https://watermyplantsbe.herokuapp.com/api/login', this.state.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.props.history.push(`/lists`);
          localStorage.setItem('id', res.data.id)
        })
         .catch(err => console.log(err))
  }

  render(){
    return(
          <Form  onSubmit={this.login} className =''>
              <input
                  className ='input'
                  type="text"
                  placeholder="username or email"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
              />
              <input
                  className ='input'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
              />

              <Button color="success">
           {this.props.loggingIn ? (
             <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
           ) : (
             "Log in"
           )}
         </Button>
          </Form>

    );
  }
}

export default Login;



// import React from 'react'
// import axios from 'axios'
//
// class Login extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userInput: '',
//       passInput: ''
//     };
//
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
//   handleSubmit = e => {
//        e.preventDefault();
//         axios
//             .post('https://watermyplantsbe.herokuapp.com/api/login', this.state)
//             .then(res => {
//               localStorage.setItem("token", res.data.token);
//            })
//            .catch(err => console.log(err))
//       }
//
//   render(){
//     return(
//       <div >
//         <form className='input-form' onSubmit={this.handleSubmit}>
//           <input
//             className ='inputbox'
//             onChange={this.handleInputChange}
//             placeholder="Username"
//             value={this.state.userInput}
//             name="username"
//           />
//           <input
//             className ='inputbox'
//             onChange={this.handlePasswordChange}
//             placeholder="Password"
//             value={this.state.passInput}
//             name="password"
//             type="password"
//           />
//           <button className='button' type="submit">Login</button>
//         </form>
//       </div>
//     )
//   }
// }
//
//
// export default Login;
