import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 fw-normal">{this.props.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {this.props.price} <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{this.props.users}</li>
              <li>{this.props.storage}</li>
              <li>{this.props.support}</li>
              <li>{this.props.access}</li>
            </ul>
            <button
              type="button"
              className="w-100 btn btn-lg btn-outline-primary"
            >
              {this.props.register}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
