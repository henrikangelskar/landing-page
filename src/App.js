// src/App.js
import React from "react";
import Hero from "./components/Hero/Hero";
import OrderForm from "./components/OrderForm/OrderForm";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Hero />
      <OrderForm />
    </div>
  );
}

export default App;
