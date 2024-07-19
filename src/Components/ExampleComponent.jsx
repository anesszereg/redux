import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
 (
    <div>
      <h1>counter component :  </h1>

    </div>
  );
};

export default ExampleComponent;






//! when we use useEffect

// Data Fetching: When you need to fetch data from an API when the component mounts or when certain props/state change.
// Subscribing to Events: Adding event listeners or subscribing to WebSocket events.
// Manual DOM Manipulations: When you need to directly interact with the DOM elements.
// Running Timers: Setting intervals or timeouts.






//! Differences Between useState and useEffect



// useState: Used for managing state in functional components.
// useEffect: Used for performing side effects after the component renders.
// Usage:

// useState: Initializes state and provides a way to update it.
// useEffect: Runs side effect code after rendering and optionally cleans up before the component unmounts or before running the effect again.
// Execution Timing:

// useState: Runs synchronously during rendering.
// useEffect: Runs after the render is committed to the screen.
// Dependencies:

// useState: Does not have dependencies.
// useEffect: Takes a dependency array to determine when the effect should run.



//! example 2 :

// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []); // Empty array ensures this effect runs only once

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default Timer;


// In this example:

// useState manages the count state.
// useEffect sets up an interval that updates the count every second and cleans up the interval when the component unmounts.



