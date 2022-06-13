import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ClinicPage = () => {
  return (
    <main>
      <section>
        <ul>
          <li>
            <Link to="/">Главная страница</Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/clinic">Клиники</Link>
          </li>
        </ul>
        <h1>
          Клиники <span>в Грозном</span>
        </h1>
        <span>
          Если появятся вопросы просьба нас не беспокоить:{" "}
          <a href="tel:+74956171171">+7 (938) 000-21-71</a>
        </span>
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default ClinicPage;
