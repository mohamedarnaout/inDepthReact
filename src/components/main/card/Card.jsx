import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div class="card">
      <h2 class="card_heading">{props.heading}</h2>
      <img src={props.image} alt="neckles picture" class="card_img" />
      <p class="card_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit
        omnis adipisci necessitatibus? Tempora voluptatem aliquid ab veritatis,
        doloribus recusandae a hic omnis esse pariatur. Esse corporis laudantium
        ad quibusdam. Velit, laboriosam ullam iure possimus quod labore placeat
        facilis sapiente. Culpa veritatis ipsam harum est non ut blanditiis
        eligendi in!
      </p>
      <a href="#products" class="card_link">
        {props.text}
      </a>
    </div>
  );
}

export default Card;
