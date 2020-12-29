import React, { Component } from "react";
import Trow from "./tableRow";

class Table extends Component {
  render() {
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((tr) => {
            return <Trow key={tr.id} ID={tr.id} name={tr.login} URL={tr.url} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
