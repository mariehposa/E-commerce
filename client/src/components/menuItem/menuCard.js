import React from "react";
import "./styles.scss";

export default function MenuCard({ items }) {
  return (
    <div className={`${items.size} outer-box`} style={{background: `url(${items.imageUrl})`}}>
      <div className="inner-box">
        <div className="content">
          <h2 className="title">{items.title}</h2>
          <span className="subtitle">{items.size}</span>
        </div>
      </div>
    </div>
  );
}
