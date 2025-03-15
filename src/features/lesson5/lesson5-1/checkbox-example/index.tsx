"use client";

import React, { useState } from "react";


export const CheckboxExample: React.FC = () => {
    const [checked,setChecked] = useState(false);
    const handleChangeCheck = () => {
        setChecked((checked)  => !checked);
    };

    return (
        <>
        <h3>1つ</h3>
        <label>
            <input type="checkbox" onChange={handleChangeCheck}/>
        </label>
        <p>選択：{checked? 'ON':'OFF'}</p>
        </>

    );
};

export const CheckboxExample2: React.FC = () => {
    const[list, setList] = useState([
        { label: "おはよう", checked:false },
        { label: "こんにちは", checked:false },
        { label: "こんばんは", checked:false },
    ]);
    // const items = ['おはよう','こんにちは','こんばんは'];

    const [display, setDisplay] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newList = list.map((item) => {
            if (item.label === e.target.value) {
                item.checked = !item.checked;
            }
            return item;
        });
        setList(newList);

        const displayList = newList
            .filter((item) => item.checked)
            .map((item) => item.label);
        setDisplay(displayList.join(","));
    };
    
    return (
        <>
        <h3>複数</h3>
        {list.map((item) => (
            <label key={item.label}>
                <input 
                type="checkbox"
                value={item.label}
                checked={item.checked}
                onChange={handleChange}
                />
                {item.label}
            </label>
        ))}
        <p>選択：{display}</p>
        </>

    );
};