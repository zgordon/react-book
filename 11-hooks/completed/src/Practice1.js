import React, { useState } from "react";

const Practice1 = () => {
  /*
   * 1. Import useState from react
   * 2. Add a count value to state
   * 3. Display the count in an h1
   * 4. Add a button to increase the count
   *
   */
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add + 1</button>
    </>
  );
};

export default Practice1;
