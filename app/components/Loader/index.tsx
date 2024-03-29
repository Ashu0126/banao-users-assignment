import React from "react";
import styles from "./index.module.scss";

const UserLoader = () => {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <div className={styles.name}></div>
            <div className={styles.email}></div>
          </div>
        </div>
      </div>
      <div className={styles.loader}>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <div className={styles.name}></div>
            <div className={styles.email}></div>
          </div>
        </div>
      </div>
      <div className={styles.loader}>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <div className={styles.name}></div>
            <div className={styles.email}></div>
          </div>
        </div>
      </div>
      <div className={styles.loader}>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <div className={styles.name}></div>
            <div className={styles.email}></div>
          </div>
        </div>
      </div>
      <div className={styles.loader}>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <div className={styles.name}></div>
            <div className={styles.email}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLoader;
