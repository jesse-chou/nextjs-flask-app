"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading");
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setNames(data.people);
        console.log(data.people);
      });
  }, []);

  return (
    <div>
      <p>{message}</p>
      {names.map((name, index) => {
        return <div key={index}>{name}</div>;
      })}
    </div>
  );
}
