import React, { useState } from "react";

function Parent() {
  const [data, setData] = useState("hello from parent");

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <>
      <h1>{data}</h1>
      <Children handleClick={handleDataChange} />
      <Children2 data={data} />
    </>
  );
}

function Children({ handleClick }) {
  function handleClickFromChild() {
    handleClick("new data from child");
  }
  return <button onClick={handleClickFromChild}>send data to parent</button>;
}

function Children2({ data }) {
  return <h1>children2: {data}</h1>;
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
