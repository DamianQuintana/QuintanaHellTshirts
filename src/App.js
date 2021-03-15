import React, { useState } from 'react';
import './App.css';
import PropGreeting from './components/ItemListContainer';
import Navbar  from './components/navBar';
import ItemCount from './components/Counter'
import {Component} from "react";


function App() {
  const [actualStock, setActualStock] = useState(5);
  const buyedStock = (newStock) => 
  setActualStock((actualStock) => actualStock-newStock);

  return (
    <>
    <Navbar/>
    <PropGreeting greeting ="Bienvenido a la sección del ItemListContainer" buySome="Dentro de poco vamos a tener los productos cargados"/> 
    <ItemCount stock={3} initial = {1} addOn = {buyedStock}/>
    </>
  );
}
export default App;
