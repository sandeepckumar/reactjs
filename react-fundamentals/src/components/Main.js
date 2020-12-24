import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <Card
            name="Free"
            price="$0"
            users="10 users included"
            storage="2 GB of storage"
            support="Email support"
            access="Help center access"
            register="Sign Up for free"
          />
          <Card
            name="Pro"
            price="$15"
            users="20 users included"
            storage="10 GB of storage"
            support="Priority email support"
            access="Help center access"
            register="Sign Up"
          />
          <Card
            name="Enterprise"
            price="$29"
            users="30 users included"
            storage="15 GB of storage"
            support="Phone and email support"
            access="Help center access"
            register="Sign Up"
          />
        </div>
        <Footer />
      </main>
    );
  }
}

export default Main;
