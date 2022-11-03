import React from "react";
import doc from "./doc2.jpg";
import styles from "./blockContent.module.css";

function BlockContent(props) {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.leftContent}>
        <h1 className={styles.lefttextSize}>
          К врачу <br />
          не выходя из дома
        </h1>
        <div className={styles.leftCentrBlock}>
          Просто запишитесь на сайте будьте здоровы
        </div>

        <div className={styles.leftDownBlock}>
          <h5>Больше функций и услуг</h5>
          <p>Будет доступно в ближайшее время. Наберитесь терпения</p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src={doc} className={styles.images} />
      </div>
    </div>
  );
}

export default BlockContent;
