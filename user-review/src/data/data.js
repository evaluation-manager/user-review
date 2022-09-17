import React, { useState } from 'react';

// Create your functional component:
function Example() {
  // And now you can use hooks
  // But only inside your functional component's
  // body
  const [count, setCount] = useState(0);
 //export  const teste = count;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}