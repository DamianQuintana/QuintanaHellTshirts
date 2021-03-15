const ItemCount = ({ stock, initial, addOn }) => {
    return( <form>
    Stock:{stock}
    <br/>
    <input id = "quantity" type = "number" placeholder = {initial}></input>
    <br/>
    <button onClick = {() => addOn(5)} >Agregar Al carrito</button>
    </form>);
  };

  export default ItemCount(); 