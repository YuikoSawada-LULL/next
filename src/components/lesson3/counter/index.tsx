"use client"

import React, {useState} from "react";

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const handleClickCountUp = () => {
        setCount((count) => count + 1);
    };
    const handleClickCountDown = () => {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    };
    return (
        <>
            <button onClick={handleClickCountUp}>+</button>
            {count}
            <button onClick={handleClickCountDown}>-</button>
        </>
    );
};