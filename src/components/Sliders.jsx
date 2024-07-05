// let Carousel = require("react-responsive-carousel").Carousel;

import { Carousel } from "react-responsive-carousel";

export default function Sliders() {
  return (
    <Carousel>
      <div>
        <img src="/assets/airasia-placeholder.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/assets/airasia-placeholder.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/assets/airasia-placeholder.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="/assets/airasia-placeholder.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="/assets/airasia-placeholder.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="/assets/airasia-placeholder.jpg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
}
