# React
- React is a JavaScript library for building user interfaces, particularly single-page applications where you want the page to be dynamic and interactive without needing to reload. It focuses on building reusable UI components.
<br />
- React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.

# Key Concepts
- ```Components```: Components are the building blocks of a React application. A component can be a class or a function, and it returns a React element that describes how a section of the UI should appear.
<br />
- ```JSX```: JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like.
<br />
- ```State and Props```: State is a way to store information that is local to a component and can change over time. Props are inputs to a component that allow data to be passed from one component to another.
<br />
- ```Virtual DOM```: React uses a virtual DOM to improve performance. When a component's state changes, React creates a new virtual DOM and compares it to the previous virtual DOM. It then updates only the parts of the actual DOM that have changed, Also known as Reconciliation.

# Setting Up a React Project
- Install ```Node.js```: Make sure you have Node.js installed.
- Install Create React App: Run ```npx create-react-app my-app``` in your terminal.
- Navigate to Your Project: Run ```cd my-app```.
- Start the Development Server: Run ```npm start```.

# Understanding the Project Structure
- ```public/```: Contains the index.html file, which is the single HTML file for your React app. Your React components will be injected into this file.
- ```src/```: This is where you’ll write your React components and other application code. It includes:
    - ```index.js```: The entry point of the React app. It renders the top-level App component into the DOM.
    - ```App.js```: A default React component. You’ll often start building your app by modifying this file.
- ```node_modules/```: Contains all the dependencies your project needs (installed via npm).

# State and Props 
- <b>State</b> is a built-in object in React components that allows them to manage and track changes in data over time. State is dynamic; when state changes, the component re-renders to reflect the updated data.
- Unlike props, which are passed to components and are immutable, state is managed within the component and can change, causing the component to re-render.
``` 
import React, { useState } from 'react';

function App() {
  // Declare a state variable 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
````
- <b>What’s Happening Here:</b>
<br />
  - <b>useState Hook </b>: useState is a special function provided by React that allows you to add state to your functional components. It returns an array with two elements: the current state value (count) and a function to update that state (setCount).
<br />
  - <b>Initial State</b>: The value inside useState(0) is the initial state, so count starts at 0.
<br />
  - <b>Updating State</b>: When you click the "Increase" button, setCount(count + 1) is called, updating the state and causing the component to re-render with the new count value.
<br />

- <b>Props</b> (short for "properties") are used to pass data from one component to another. Unlike state, props are read-only and cannot be modified by the component that receives them.

Creating a child component that receives data via props:

````
// Counter.jsx
import React from 'react';

function Counter({ count, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
````

Now, modify your App component to use this new Counter component:

````
import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter
        count={count}
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count - 1)}
      />
    </div>
  );
}

export default App;
````

- <b>What’s Happening Here:</b>
<br />
  - <b>Passing Props:</b> The Counter component receives three props: count, onIncrease, and onDecrease. These props are passed from the App component.
  - <b>Using Props:</b> Inside Counter, the props are used to display the current count and handle button clicks, which update the count.

# What Are Hooks?
- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
- Basic Hooks in React :
   - The React ```useState``` Hook allows us to track state in a function component.
   - useEffect: Handles side effects like fetching data, directly manipulating the DOM, or setting up subscriptions.
   - useContext: Accesses context values.
   - useReducer: Manages complex state logic (like a more powerful version of useState).
   - useCallback: Memoizes functions to prevent unnecessary re-renders.
   - useMemo: Memoizes expensive calculations to optimize performance.
   - useRef: Directly accesses and manipulates DOM elements.