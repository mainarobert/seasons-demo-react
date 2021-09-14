import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);

    //state object
    this.state = {lat : null, errorMessage : ''}


  }

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
          <h1>latitude : {this.state.lat}</h1>
        </div>
      )
    }
    return <div><h3>loading...</h3></div>
  }
}

export default App;
