import React from 'react';
import './Navbar.css';

import ReactSVG from 'react-svg';

const svgArr = [["home","http://localhost:3000/svg/garbage.svg"],["gift","http://localhost:3000/svg/002-clouds.svg"],["gallery","http://localhost:3000/svg/021-menu-4.svg"]];

class Navbar extends React.Component {
  render() {
    const listItems = svgArr.map(src =>
      <li key={src.toString()} className="navbar-nav" >
        <ReactSVG
          path={src[1]}
          onInjected={svg => {
            console.log('onInjected', svg)
          }}
          svgClassName="svg-class-name"
          className="wrapper-class-name"
          onClick={() => {
            this.props.onChooseNav(svgArr.findIndex(el=>el===src));
          }}
        />
      </li>
    );

    return (
      <header>
        <ul className="navbar">{listItems}</ul>
      </header>
    );
  }
};

export default Navbar;
