"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";

type TextInputProps = {
    children?: React.ReactNode,
    inputId: string,
    placeHolder: string,
}

export const TextInput: React.FC<TextInputProps> = ({children, inputId, placeHolder}) => {
    const [val, setVal]=  useState('');
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }

    return (
        <>
            <div className={styles["form-set"]}>
              <label htmlFor="salon-location">{children}</label>
              <input onChange={handleChangeInput} type="text" id={inputId} placeholder={placeHolder} />
            </div>
            {/* <p>入力値：{val}</p> */}
        </>
    );
};