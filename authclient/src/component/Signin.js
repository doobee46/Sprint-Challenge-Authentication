import React, { Component } from 'react';
import axios from 'axios'

class Signin extends Component {
  state = { 
    username:'doobee46',
    password:'metro246',
    message:''
   }

    handleChange = (e) =>{
      this.setState({ [e.target.name]: e.target.value });
    }

    hanldeSubmit = (e) =>{
      e.preventDefault();
      const url = `${process.env.REACT_APP_API_URL}/api/login`
      const creds={
        username:this.state.username,
        password:this.state.password
      }
      axios
      .post(url, creds)
      .then(res =>{
        this.setState({message: res.data.msg})
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(err =>{
        console.log(err)
      })
    } 


  render() { 
    return ( 
      <>
      <form onSubmit={this.hanldeSubmit}>
      <label htmlFor="uname"><b>Username</b></label>
        <input type="text" 
        placeholder="Enter Username" 
        name="username" 
        value ={this.state.username} required
        onChange ={this.handleChange}
        />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" 
        placeholder="Enter Password" 
        name="password"  
        value ={this.state.password}required
        onChange ={this.handleChange}
        />

        <button type="submit"onClick={this.handleSubmit}>Login</button>
      </form>
      <p>{this.state.message}</p>
      </>
     );
  }
}

export default Signin;