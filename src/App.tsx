import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://www.pitchup.com/static/v33/uploads/chillifest.png"
            className="App-logo"
            alt="logo"
          />
          <p>SPICY BOOK CLUB</p>
          <h3>Mar-Apr 2019</h3>
          <p><a href="https://www.goodreads.com/book/show/29579.Foundation">Foundation - Isaac Asimov</a></p>
          <h3>May-Jun 2019</h3>
          <p><a href="https://www.goodreads.com/book/show/38447.The_Handmaid_s_Tale">The Handmaid's Tale</a></p>
        </header>
      </div>
    );
  }
}

export default App;
