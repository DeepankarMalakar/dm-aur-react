import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "Deepankar",
  //   age: 22
  // }

  // let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-black font-light p-4 rounded-md mb-1 text-white">
        Tailwind Test
      </h1>
      <Card username="Angelina" btnText = "Visit Me"/>
      <Card username="Debba" btnText = "Visit Me"/>
    </>
  );
}

export default App;
