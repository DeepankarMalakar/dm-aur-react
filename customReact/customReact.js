// This is how react evaluate or do the work

function customReact(reactEl, container) {
    // const domElement = document.createElement(reactEl.type);
    // domElement.innerHTML = reactEl.children;
    // domElement.setAttribute("href", reactEl.props.href);
    // domElement.setAttribute("target", reactEl.props.target);
    // container.appendChild(domElement);

    // Another method
    const domElement = document.createElement(reactEl.type);
    domElement.innerHTML = reactEl.children;
    for (let prop in reactEl.props) {
        domElement.setAttribute(prop, reactEl.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com/",
        target: "_blank",
    },
    children: "Click me to visit Google",
};

const mainContainer = document.getElementById("root");

customReact(reactElement, mainContainer);
