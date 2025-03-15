"use client";

import React, { useState } from "react";

export const TodoListExample: React.FC = () => {

  const [contentVal, setContentVal] = useState("");
  // こちらは配列で用意する
  const [todoList, setTodoList] = useState<{ id: number; content: string }[]>([]);
  const [id, setId] = useState(0);

  // onChangeに直接記載する形にしてみる。やっていることは同じ
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setContentVal(e.target.value)
  // }
  const addTodo = () => {
    if (contentVal === "") return;
    const newTodo = {
      id: id,
      content: contentVal,
    };
    // ...はスプレット演算子。配列を崩してくれる
    setTodoList((todoList) => [...todoList, newTodo]);
    setContentVal("");
    setId((id) => id + 1);
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  
  return (
    <>
      <input type="text" onChange={(e) => setContentVal(e.target.value)} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id} data-id={item.id}>
            {item.content}
            <button onClick={() => deleteTodo(item.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
