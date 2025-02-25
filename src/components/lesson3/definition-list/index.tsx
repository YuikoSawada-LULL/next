import React from "react";
import styles from "./index.module.scss";

type DefinitionListProps = {
    dt: string
    dd: string
}
export const DefinitionList: React.FC<DefinitionListProps> = ({dt, dd}) => {
    return (
        <dl className={styles.dl}>
            <dt className={styles.dt}>{dt}</dt>
            <dd className={styles.dd}>{dd}</dd>
        </dl>
    );
};