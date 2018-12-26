import React from "react";

const API_KEY = "2kLNntuaDzZddq5xFUC4ZyXVjMv0cyIx1o31a0Gd";

class PictureOfTheDay extends React.Component {
  state = {
    isLoading: true,
    image: [],
    error: null
  }
  fetchImage = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          image: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false}));
  }

  componentDidMount() {
    this.fetchImage();
  }

  render() {
    console.log(this.state.image);
    return (
      <div>
        <img src={this.state.image.url} />
      </div>
    );
  }
};

export default PictureOfTheDay;
