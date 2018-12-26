import React from "react";
import Nav from './components/Nav';
import PictureOfTheDay from './components/PictureOfTheDay';
import SpaceNews from './components/SpaceNews';

class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
        <Nav />
        <PictureOfTheDay />
        <SpaceNews />
      </div>
    );
  }
};



export default App;
