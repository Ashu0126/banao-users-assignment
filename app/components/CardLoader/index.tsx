import React from "react";
import styles from "./index.module.scss";

const CardLoader = () => {
  return (
    <div className={styles.card}>
      <div className={styles.loader}>
        <div className={styles.avatar}></div>
        <div className={styles.userInfo}>
          <div className={styles.name}></div>
          <div className={styles.jobTitle}></div>
          <div className={styles.bio}></div>
          <div className={styles.email}></div>
          <div className={styles.username}></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
