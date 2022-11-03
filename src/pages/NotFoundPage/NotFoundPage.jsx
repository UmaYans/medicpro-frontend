import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.main_sect}>
      <section className={styles.notFound}>
        <div className={styles.img}>
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div className={styles.text}>
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <Link to="/" className={styles.yes}>
            YES
          </Link>
          <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
