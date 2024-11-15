import React from 'react';
//import './ServiceCard.css';

const ServiceCard = ({ imgSrc, title, description, link }) => (
  <div className="col-md-4 servicio">
    <img className="lazy loaded" alt={title} src={imgSrc} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link}>SABER MÁS</a>
  </div>
);

export default ServiceCard;
