import React from 'react';
import './Icon.css';

const Icon = ({ direction }) => (
  <i className={`arrow ${direction}`}></i>
);

export default Icon;
