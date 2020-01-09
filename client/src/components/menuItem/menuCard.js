import React from "react";
import './styles.scss';

export default function MenuCard({items}) {
  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <div className="content">
            <h2 className="title">{items}</h2>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
}