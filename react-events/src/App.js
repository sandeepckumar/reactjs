import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { showBModal: false };
    this.handleCardClose = this.handleCardClose.bind(this);
    this.handleCardOpen = this.handleCardOpen.bind(this);
  }
  handleCardOpen() {
    this.setState({ showBModal: true });
  }
  handleCardClose() {
    this.setState({ showBModal: false });
  }
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.handleCardOpen}>
          Click Here to show Card
        </button>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1609058745811-2e87ab15790a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            className="card-img-top"
            alt="..."
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary" onClick={this.handleCardClose}>
              hide the card
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
