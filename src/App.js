import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{

  //state object
  state = {lat : null, errorMessage : ''}

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
      
        // To update state object we called setState
        this.setState({ lat: position.coords.latitude })
      },

      error=> {
        console.log(error)
        
        // To update state object we called setState
        this.setState ({ errorMessage: error.message })
     } 
    )
  }

  render(){
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h2>error : {this.state.errorMessage}</h2>
        </div>
      )
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay latitude = {this.state.lat} />
        </div>
      )
    }
    return <div><h3>loading...</h3></div>
  }
}

export default App;
