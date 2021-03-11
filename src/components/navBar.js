import React from 'react';

import CartWidget from './CartWidget';
function NavBar() {
  return (
    <div className="App">
        <h1 id ="MainHeader">HELL TSHIRTS</h1>
        <h6 id = "MainHeader">TRAYENDO LAS REMERAS DEL INFIERNO HACE 5 AÑOS</h6>
    <ul class ="navBar">
    <li><a id= "esto" href ="#home">Home</a></li>
    <li><a href="#about-us">Sobre nosotros</a></li>
    <li><a href="#why-us">Por que nosotros</a></li>
    <li><a href="#catalog">Catálogo</a></li>
    <li><a href="#specialRequests">Pedidos especiales</a></li>
    <li><a href="#gallery">Galeria</a></li>
    <li><a href="#buy-a-tshirt">Tienda Online</a></li>
    <li><a href="#daShopped">Carrito de compras</a></li>
    <li><a href="#staff">Nosotros</a></li>
    <li><a href="#contact">Contacto</a></li>
    <CartWidget/>
    </ul>
    </div>
  );
}

export default NavBar;

