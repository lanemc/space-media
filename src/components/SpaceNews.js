import React from "react";

const API_KEY = "c7296230f32745d0976a1fcb79d0d182";

class SpaceNews extends React.Component {
  state = {
    isLoading: true,
    newsItems: [],
    error: null
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?category=science&q=astronomy&from=2018-11-25&sortBy=publishedAt&country=us&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(articles => {
        this.setState({
          newsItems: articles.articles,
          isLoading: false
        });
      }).catch(error => this.setState({ error, isLoading: false}));
  }

  render() {
      return (
        <div>
          <ul className="news-items">
            {this.state.newsItems.map(article => (
              <li key={article.title}><a href={`${article.url}`}>{article.title}</a></li>
            ))}
          </ul>
        </div>
      );
  }
};

export default SpaceNews;
