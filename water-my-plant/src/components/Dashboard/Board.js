import React from 'react';
import './Board.css';
import axios from 'axios';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      plants: [],
    }
  }

  componentDidMount(){
   console.log('plants');
   var token = localStorage.getItem(`token`)
  var id = localStorage.getItem(`id`)
   var request = {
     headers: { authorization : token },
   }
   axios
     .get(`https://watermyplantsbe.herokuapp.com/api/users/${id}/plants`, request)
     .then(res => {
       console.log(res);
       this.setState({
         plants: res.data,
       })
   })
   .catch(err => console.log(err))
 }

 addPlant = event => {
   event.preventDafault();

   this.props.plants(res.data);

   this.setState({
     name: '',
     description:''
   });
   axios.post(`https://watermyplantsbe.herokuapp.com/api/users/${id}/plants`)
 }

  render(){
    console.log(this.state.plants)
    console.log(this.props);
    return(
      <div className="dashboard">
        <h1> Dashboard </h1>
        <h2> WELCOME</h2>
        <div>{this.state.plants.map((plant) => (
          <div>
            <p>Plant Name: {plant.name}</p>
            <p>Description:{plant.description}</p>
            <p>Water plant: {plant.last_water}</p>
          </div>
        ))}</div>
        <button> Update </button>
      </div>
    )
  }
}

export default Board;
