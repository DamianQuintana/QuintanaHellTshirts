import logo from './Images/logo.jpg';
import React from 'react';

function CartWidget(){
    return(   
        <>
        <h1 id ="headerCart">Componente Cart Widget</h1>
         <img src = {logo} style = {{maxWidth: '50%'}} ></img> 
         </>
    );
}
export default CartWidget;