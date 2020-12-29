import React, { Component } from "react";

class Trow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.ID}</td>
        <td>{this.props.name}</td>
        <td>{this.props.URL}</td>
      </tr>
    );
  }
}

export default Trow;
