// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
import { useState } from "react";

//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
export default function Item({ name, description, stock, newCart }) {
  const [currentStock, setCurrentStock] = useState(stock);
  const newStock = () => {
    setCurrentStock(currentStock - 1);
  };
  const addToCart = () => {
    if (currentStock > 0) {
      newStock();
      newCart();
    } else {
      setCurrentStock(0);
    }
  };
  let availableStock = currentStock > 0 ? true : false;
  return (
    <div className="producto">
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>
        En stock:{" "}
        <span className={availableStock ? "withStock" : "withoutStock"}>
          {availableStock ? currentStock : "Agotado"}
        </span>
      </h5>
      <button onClick={addToCart} disabled={availableStock ? false : true}>
        {availableStock ? "COMRAR" : "SIN STOCK"}
      </button>
    </div>
  );
}
