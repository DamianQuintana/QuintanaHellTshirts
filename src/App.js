import React from 'react';
import './App.css';
import PropGreeting from './components/ItemListContainer';
import Navbar  from './components/navBar';
function App() {
  return (
    <>
    <Navbar/>
    <PropGreeting greeting ="Bienvenido a la sección del ItemListContainer" buySome="Dentro de poco vamos a tener los productos cargados"/> 
     </>
  );
}
export default App;