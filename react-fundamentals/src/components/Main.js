import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <Cards />

        <Footer />
      </main>
    );
  }
}

export default Main;
