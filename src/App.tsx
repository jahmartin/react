import React from 'react';
import './App.css';
import HomePage from "./components/LandingPage/HomePage";
import Header from "./components/Header/Header";
import { BrowserRouter,Route} from "react-router-dom";
import RegisterComponent from "./components/Register/RegisterComponent";

function App() {
  return (
      <>
          <Header/>
          <BrowserRouter>
              <Route path="/" component={HomePage}  />
              <Route path="/register" component={RegisterComponent}  />
          </BrowserRouter>
      </>


  );
}

export default App;
