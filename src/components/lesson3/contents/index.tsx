import React from "react";
import styles from "./index.module.scss";

type ContentsProps = {
    children: React.ReactNode;
};

export const Contents: React.FC<ContentsProps> = ({ children }) => {
    return <div className={styles.contents}>{children}</div>;
};