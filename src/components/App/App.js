import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      navChoice: 0,
      opacity:0,
      photoHomeId:-0.5,
    }
    this.chooseNav = this.chooseNav.bind(this);
  }

  componentDidMount() {
      this.timerID = setInterval(
        () => this.changeOpacityHome(),
        100
      );

      setTimeout(
        () => clearInterval(this.timerID),
        2000
      );

      this.timerPhotoId = setInterval(
        () => {this.changePhotoHomeId();console.log(this.state.photoHomeId)},
        1000
      );

      setTimeout(
        () => clearInterval(this.timerPhotoId),
        9000
      );
    }

  changeOpacityHome() {
    this.setState({
      opacity: this.state.opacity+0.1
    });
  }

  changePhotoHomeId() {
    this.setState({
      photoHomeId: this.state.photoHomeId + 0.5
    });
  }

  chooseNav(choice) {
    this.setState({navChoice: choice});
  }

  wybor(param) {
    switch(param){
      case 0: return(
                  <Home opacity={this.state.opacity} photoId={Math.floor(this.state.photoHomeId)}/>
              );
              break;
      case 1: return(
                  <div>Gift</div>
              )
              break;
      default: return (
                  <div>blad</div>
               )
   };}

  render() {
    return (
      <div className="App">

        <div className="content uk-animation-slide-top" ><Navbar onChooseNav={this.chooseNav} />{this.wybor(this.state.navChoice)}</div>
      </div>
    );
  }
}

export default App;
