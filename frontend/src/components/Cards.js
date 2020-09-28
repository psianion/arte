import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Artworks!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-09.png"
              text="'Meadows' by Luke Warm"
              label="Painting"
              path="/products"
            />
            <CardItem
              src="images/img-02.jpg"
              text="'Blessings of Buddhaa' by Shantanu Bruh"
              label="Sketches"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-03.png"
              text="'Goddess of Butterflies' by Snigdha Jain"
              label="Digital Art"
              path="/products"
            />
            <CardItem
              src="images/img-04.jpg"
              text="'Jazz Lights' by Rahul Seengh"
              label="Color Sketch"
              path="/products"
            />
            <CardItem
              src="images/img-08.jpg"
              text="'Lotus' by Ali Zafar"
              label="Oil Painting"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
