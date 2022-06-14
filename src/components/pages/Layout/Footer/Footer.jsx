import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>MedicPRO 2022 - 2022</h2>
      <Link to="/docs">Врачи |</Link>
      <Link to="/clinic">Клиники |</Link>
      <Link to="/servic">Услуги |</Link>
    </div>
  );
};

export default Footer;