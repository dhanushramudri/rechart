import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("Dhanush");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vercel-backend-lemon.vercel.app/api"
        ); // Correct URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    const postData = async () => {
      try {
        const response = await fetch(
          "https://vercel-backend-lemon.vercel.app/api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("There was a problem with the post operation:", error);
      }
    };

    fetchData();
    postData();
  }, [name]);

  return (
    <div>
      {data.map((d, i) => (
        <div key={i}>{d}</div>
      ))}
      <h1>Hi</h1>
    </div>
  );
};

export default Fetch;
