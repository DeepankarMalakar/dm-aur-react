import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


function Deepu() {
    return(
        <h1>Hello, I am Deepu aka DM</h1>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com/",
//         target: "_blank",
//     },
//     children: "Click me to visit Google",
// };

const reactElement = React.createElement(
    'a',    // expect a tag
    {href: 'https://google.com/', target: '_blank'},     // expect attributes
    'Click me to visit Google'      // expect direct text to show
)
// ReactDOM.createRoot(document.getElementById("root")).render(<Deepu />);
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <App />
// );

ReactDOM.createRoot(document.getElementById("root")).render(
    reactElement
)