import React from "react";
import Nav from './components/Nav';
import PictureOfTheDay from './components/PictureOfTheDay';

class App extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
        <Nav />
        <PictureOfTheDay />
      </div>
    );
  }
};



export default App;
