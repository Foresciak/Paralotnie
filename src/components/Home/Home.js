import React from 'react';
import './Home.css';

const urls = ["../../img/marzec.jpg","../../img/kwiecien.jpg","../../img/okladka.jpg","../../img/sierpien.jpg","../../img/styczen.jpg"]

class Home extends React.Component {
  render() {
    return (
      <div className = "home">
        <div className = "aboutMe">
          <div className = "describe"><p>Chciałbym zabrać Cię w podniebną podróż nad Lubinem</p> </div>
          <div className = "myPhoto"><img src="../../img/home_tato.png" alt="" style={{opacity: this.props.opacity}}/></div>
        </div>
        <div className = "photos" style={{opacity: this.props.opacity }}>
          <img src={urls[this.props.photoId]} alt=""/>
        </div>
      </div>
    );
  }
}

export default Home;
