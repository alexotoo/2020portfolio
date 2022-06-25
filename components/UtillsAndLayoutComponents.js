import React from "react";
import styles from "../components/utillsAndLayoutComponent.module.scss";
export const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
