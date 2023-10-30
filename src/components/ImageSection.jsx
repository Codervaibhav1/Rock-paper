import React from "react";
import Rock from "../assets/Rock-removebg-preview.png";
import Paper from "../assets/paper-removebg-preview.png";
import Scissors from "../assets/sizer-removebg-preview.png";
const ImageSection = ({ playGame }) => {
  return (
    <div>
      <h5 className="text-center my-5 text-light">Luck your Choice</h5>
      <div className="container d-flex justify-content-center">
        <button className="rounded-circle" onClick={() => playGame("Rock")}>
          <img id="img-one" src={Rock} />
        </button>
        <button
          className="rounded-circle ms-3"
          onClick={() => playGame("Paper")}
        >
          <img id="img-two" src={Paper} />
        </button>
      </div>
      <div className="container d-flex justify-content-center">
        <button
          className="rounded-circle ms-3"
          onClick={() => playGame("Scissors")}
        >
          <img id="img-three" src={Scissors} />
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
