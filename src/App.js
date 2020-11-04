import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route:'signin'
    }
  }
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  render(){
    return(
      <div className="App">
        <Particles className='particles'
         params={particlesOptions}
        />
        
        { this.state.route === 'home' 
          ? <div>
              <Navigation onRouteChange={this.onRouteChange}/>
            </div>
          : (
              this.state.route === 'signin' 
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )
          
          
        }
      </div>
    );
  }
}

export default App;


