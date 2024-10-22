import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import Login_page from "./pages/login_page";

function App() {

  return (
    <>
      <BrowserRouter>
      <Hero />
      {/* <Login_page /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
