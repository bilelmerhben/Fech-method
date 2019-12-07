import React, { Component } from 'react'

export default class App extends Component {
//-----------------------//
//Methode 1
async componentDidMount(){

  try{ const request = await fetch('https://api.github.com/search/users?q=Dan')
const response = await request.json();  
console.log(response)
}
  catch(error){
    console.log('error');
  }
    
}
//---------------------//
//Methode 2

componentDidMount(){
  fetch('https://api.github.com/search/users?q=Dan')
  .then(res=> res.json())
  .then(result => {
    console.log(result)
  })
  .catch(function(err) {
   
  });
}
//-----------------//


  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

