import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteNum: 0,
      sites: [
        {
          "name": "YouTube",
          "link": "https://youtube.com",
        },
        {
          "name": "Serius XM",
          "link": "https://www.siriusxm.com/",
        },
        {
          "name": "Solitaire",
          "link": "https://worldofsolitaire.com/",
        },
        {
          "name": "Instagram",
          "link": "https://www.instagram.com/",
        },
      ]
    }
  }

  handleClick = (event) => {
    console.log(event.target.id);
    window.open(
      event.target.id,
      '_blank'
    )
  }

  nextClick = () => {
    if (this.state.siteNum < this.state.sites.length-2) {
      this.setState({
        siteNum: this.state.siteNum + 2,
      });
    }
  }

  backClick = () => {
    if (this.state.siteNum > 1) {
      this.setState({
        siteNum: this.state.siteNum - 2,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="outer">
          <div className="inner">
            <button id={this.state.sites[this.state.siteNum]["link"]} onClick={this.handleClick} className="blue">{this.state.sites[this.state.siteNum]["name"]}</button>
            <button id={this.state.sites[this.state.siteNum+1]["link"]} onClick={this.handleClick} className="yellow">{this.state.sites[this.state.siteNum+1]["name"]}</button>
          </div>
          <div className="inner">
            <button onClick={this.backClick} className="red">Back</button>
            <button onClick={this.nextClick} className="green">Next</button>
          </div>   
        </div>
      </div>
    );
  }
  
}

export default App;
