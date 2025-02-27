"use client"

import React, {useState} from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

type ToggleProps = {
    title: string;
    children: React.ReactNode;
    opened?: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({children, title, opened = false}) => {

    const [open, setOpen] = useState(opened);
    const handleClick = () => setOpen((open) => !open)
    return (
        <div className={clsx(styles.wrapper, open && styles.open)}>
            <button className={styles.btn} onClick={handleClick}>
                {title}
            </button>
            <div className={styles.contents}>{children}</div>
        </div>
    );
};