import "./main.css";
import React from "react";
import Card from "./card/Card";
import Promotion from "./promotion/Promotion";
import appointment from "./media/appointment.jpg";
import store from "./media/store.jpg";
import neckles from "./media/neckles.jpg";

function Main() {
  return (
    <main>
      <Promotion heading="Get 50% off on wedding rings" />
      <Card
        heading="Our Products"
        image={neckles}
        text="click here to see Our products"
      />
      <Card
        heading="Make an appointment"
        image={appointment}
        text="click here to make an appointment"
      />
      <Card heading="Our Products" image={store} text="Mon-Fri:9am - 7pm" />
    </main>
  );
}

export default Main;
