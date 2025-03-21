"use client";
import React, { useState, useEffect } from "react";
import { getContents } from "@/fetch/lesson6/get-contents";
export const ClientFetch: React.FC = () => {
  const [contents, setContents] = useState<{title: string, description: string} | undefined>(undefined);
  useEffect(() => {
    const featchGetContents = async () => {
      const data = await getContents();
            // (※7)
      setContents(data);
    }
    featchGetContents();
  }, [])
  return (
    <>
            {contents && (
                // (※10)
                <>
                    <h1>{contents.title}</h1>
                    <p>{contents.description}</p>
                </>
            )}
    </>
  );
};
