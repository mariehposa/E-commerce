import React from "react";
import './styles.scss'

export default function Homepage() {
  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <div className="content">
            <h2 className="title">HATS</h2>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="inner-box">
          <div className="content">
            <h2 className="title">SHOES</h2>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="inner-box">
          <div className="content">
            <h2 className="title">BAGS</h2>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="inner-box">
          <div className="content">
            <h2 className="title">DRINKS</h2>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
