import React from "react";
import "./banner.css";
import headerimg from "./kisspng-computer-network-cryptocurrency-blockchain-interne-5af1ee6aded157.3434751115258046509127.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="img-container">
        <img src={headerimg} alt="" />
      </div>
      <div className="text-center">
        <h1>GET <span>ALL</span> DETAILS OF COIN</h1>
        <p>Cryptocurrency is such a powerful concept that it can almost overturn governments</p>
      </div>
    </div>
  );
};

export default Banner;
