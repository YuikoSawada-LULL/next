"use client";
import { getContents } from "@/fetch/lesson6/get-contents";

export const ServerFetch: React.FC = async () => {

  //getContents自体を非同期処理しているので、その情報が確定するのを待つ必要があるためここでもawaitする
  const contents = await getContents();

  console.log(contents);
  return (
    <>
    <h1>{contents.title}</h1>
    <p>{contents.description}</p>
    </>
  );
};
