import React from "react";
import styles from "./index.module.scss";

type PageTitleProps = {
    children: React.ReactNode
}
export const PageTitle: React.FC<PageTitleProps> = ({children}) => {
    return <h1 className={styles["h1-title"]}>{children}</h1>;
};