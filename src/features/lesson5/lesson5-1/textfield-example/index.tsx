"use client";

import React, { useState } from "react";


export const TextfieldExample: React.FC = () => {
    const [val, setVal]=  useState('');
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }
    return (
        <>
            <input onChange={handleChangeInput} type="text" />
            {/* JSXだとtextareaの閉じタグいらない */}
            {/* <textarea onChange={handleChangeInput}  value="初期値はこちら"/> */}

            <br />
            <p>入力値：{val}</p>
        </>
    );
};