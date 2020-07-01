import React, { Component } from 'react';
import {render} from 'react-dom';


class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {
    fetch('https://launchlibrary.net/1.2/launch/next/10')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.launches });
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  render() {
    const list = this.state.data.map((item, index) =>
      <div key={index}>{item.name}  </div>
    );
    return (
      <div className="App">
        {list}
        <button onClick={this.getDataFromApi} > Click me to fetch </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
