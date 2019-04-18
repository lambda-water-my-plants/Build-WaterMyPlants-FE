import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
      };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePassword = e => {
     e.preventDefault();
      axios
          .post('https://watermyplantsbe.herokuapp.com/api/login', this.state)
          .then(res => {
            console.log('login', res.data)
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.id)
            this.props.history.push(`/lists`);
         })
         .catch(err => console.log(err))
    }

  render(){
    return(
          <Form  onSubmit={this.handlePassword} className =''>
              <input
                  className =''
                  type="text"
                  placeholder="username or email"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input
                  className =''
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput}
              />

              <Button color = 'success' onClick={this.handlePassword}>Log in</Button>
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
