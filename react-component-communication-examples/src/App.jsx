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
    </>
  );
}

function Children({ handleClick }) {
  function handleClickFromChild() {
    handleClick("new data from child");
  }
  return <button onClick={handleClickFromChild}>send data to parent</button>;
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
