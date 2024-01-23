import React from "react";
import loader from "../../../assets/images/loading-green-loading.gif";
import styles from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <img src={loader} className={styles.loader} />
    </div>
  );
};

export default Preloader;
