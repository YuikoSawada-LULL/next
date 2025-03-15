"use client";

import React, { useState } from "react";

export const RadioExample: React.FC = () => {
  const [select, setState] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const items = ["A", "B", "C"];

  return (
    <>
      {items.map((item) => (
        <label key={item}>
          <input type="radio" value={item} onChange={handleChange} checked={select === item} />
          {item}
        </label>
      ))}
      <p>選択：{select}</p>
    </>
  );
};
