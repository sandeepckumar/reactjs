import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  constructor() {
    super();
    this.cardsInfo = [
      {
        name: "Free",
        price: "0$",
        users: "10 Users",
        storage: "2 GB of storage",
        support: "Email Support",
        access: "Help Center Access",
        register: "Sign Up for Free",
      },
      {
        name: "Pro",
        price: "$15",
        users: "20 Users",
        storage: "10 GB of storage",
        support: "Priority email Support",
        access: "Help Center Access",
        register: "Sign Up",
      },
      {
        name: "Enterprise",
        price: "$29",
        users: "30 Users",
        storage: "15 GB of storage",
        support: "Phone and email Support",
        access: "Help Center Access",
        register: "Sign Up for Free",
      },
    ];
  }
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {this.cardsInfo.map((card) => {
          return (
            <div className="col-md-4">
              <Card
                name={card.name}
                price={card.price}
                users={card.users}
                storage={card.storage}
                support={card.support}
                access={card.access}
                register={card.register}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
