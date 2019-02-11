import React, { Component } from 'react';
import axios from 'axios'

class Jokes extends Component {
  constructor(props){
    super(props);
    this.state ={
      jokes:[]
    }
  }

  componentDidMount(){
    const url = `${process.env.REACT_APP_API_URL}/api/jokes`;
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token
      }
    }
    axios
    .get(url, options)
    .then(res =>{
      this.setState({jokes: res.data})
    })
    .catch(err =>{
      console.log(err)
    })
   }

  render() { 
    return ( 
      <>
       <h3>Dad Jokes</h3>
        <ul>
            {this.state.jokes.map(joke =>
                <li key={joke.id}>{joke.joke}</li>)}
        </ul>
      </>
     );
  }
}
 
export default Jokes;