import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Accumulation from './components/Accumulation/Accumulation';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 600
      }
    }
  },
  interactivity: {
    events:{
      onhover: {
        enable:true,
        mode: 'repulse'
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  accumulation: 0
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  calculateFaceLocation = (response)=> {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  };

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://smartbrain-detect.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response) {
        fetch('https://smartbrain-detect.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            accmulation: this.state.accumulation
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState({ accumulation: count })
        })
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err=> console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Accumulation accumulation={this.state.accumulation} />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}            
        />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
