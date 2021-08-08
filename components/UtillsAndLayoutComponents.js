import React from "react";
import styles from "../components/utillsAndLayoutComponent.module.scss";
export const Button = ({ children, nobg }) => {
  return <button className={`${styles.btn} ${nobg} `}>{children}</button>;
};
