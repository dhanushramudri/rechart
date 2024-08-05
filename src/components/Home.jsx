import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
        placeholder="Enter here...!"
      />
      <div>{name}</div>
      <div>{inputRef.current.value}</div>
    </>
  );
};

export default Home;
