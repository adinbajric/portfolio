import React from "react";
import "./Card.css";

function Card({ name, type, img, gitUrl, netUrl, animate }) {
  return (
    <div className="card" data-aos="zoom-in">
      <div className="card__title">
        <h2>{name}</h2>
        <p>{type}</p>
      </div>
      <div className="card__footer">
        <div className="icons">
          <p className="icons__text">View source</p>
          <a target="_blank" href={gitUrl}>
            <i id="project__github" className="fab fa-github "></i>
          </a>
        </div>
        <div className="icons">
          <p className="icons__text">View online</p>
          <a target="_blank" href={netUrl}>
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div className="card__image">
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default Card;
