import React from "react";

function Parent() {
  const data = "hello from parent";

  return <Children message={data} />;
}

function Children({ message }) {
  return <div>{message}</div>;
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
