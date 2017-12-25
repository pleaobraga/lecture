import React, { Component } from 'react';
import Category from './Category/Category'
import Post from './Post/Post'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Lecture </h1>
        <Category />
        <Post />
      </div>
    );
  }
}

export default App;
