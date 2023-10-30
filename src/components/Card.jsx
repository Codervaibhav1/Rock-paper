import React from "react";
const Card = ({playerChoice ,computerChoice}) => {
  return (
    <div className="container d-flex justify-content-evenly mt-3">
      <div id="card1" className="card p-3 ">
        <h5 className="text-light">Player Choice</h5>
        <h6 className="text-center text-light">{playerChoice}</h6>
      </div>
      <div id="card2" className="card p-3 ">
        <h5 className="text-light"> Com Choice </h5>
        <h6 className="text-center text-light">{computerChoice}</h6>
      </div>
    </div>
  );
};

export default Card;
