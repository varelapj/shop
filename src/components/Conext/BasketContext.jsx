import React, { createContext, useState, useReducer } from 'react';

//! Crear el contexto, esto siempre es así
export const BasketContext = createContext();

// //! Se crea el proveedor, que es una función que se puede llamar de cualquier manera 
// //! y contendrá el children
// export const CartProvider = ({ children }) => {
// //! le ponemos un useState y una función nque cambie el estado,
// //! pero contendrá una función reducer
// //! LA FUNCIÓN ES EL CONTEXTO, NO LOS PRODUCTOS. Y el propio basket
//   const [basket, setBasket] = useState([]);
// //! le voy a dar un producto nuevo y me añadirá lo que haya en el basket, mas el producto
// const addProduct = (newProduct) =>{
// setBasket([...basket,newProduct])
// }
//! Defino el estado inicial co nel basket vacío
const initialState = {
    basket: [],
    TOTAL: 0 
  };
//! Genero la función reducer con un switch, siemrpe se escribe igual. 
const reducer2 = (state, action) => {
    switch (action.type) {
//! Peude ser 'add' a secas o como quieras
      case 'add': {
        const existingProductIndex = state.basket.findIndex(
          item => item.id === action.product.id
        );
  
        if (existingProductIndex >= 0) {
          // Producto ya existe, incrementa la cantidad y recalcula el precio total
          const updatedBasket = state.basket.map((item, index) =>
            index === existingProductIndex
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
          const TOTAL = updatedBasket.reduce((total, item) => total + (item.price * item.cantidad), 0);
          return {
            ...state,
            basket: updatedBasket,
            TOTAL: TOTAL
          };
        } else {
          // Producto no existe, añadir al carrito con cantidad 1 y recalcular el precio total
          const newProduct = { ...action.product, cantidad: 1 };
          const TOTAL = state.TOTAL + (newProduct.price * newProduct.cantidad);
          return {
            ...state,
            basket: [...state.basket, newProduct],
            TOTAL: TOTAL
          };
        }
      }
      default:
        return state;
    }
  };
  //! creo qel proveedor que ahora llevará la reducer dentro

  //* Genero una función que, a su vez, va a usar la función reducer2 de arriba
  //* a través de un usereducer
  export const CartProvider = ({ children }) => {
    //! y el useReducer en lugar del useState
    const [state, dispatch] = useReducer(reducer2, initialState);
  //! useReducer tiene una función dispatch que es la que lanza  el añadir un producto
  const addProduct1 = (newProduct) => {
    dispatch({ type: 'add', product: newProduct });
};  

//! En el return le ponemos el NOMBREDELCONTEXTO.provider y elestado inicial 
//! y la función que cambie el estado
  return (
    // <BasketContext.Provider value={{ basket, addProduct,reducer }}>
//! basket ahora para ser consumida, debe accederse a través de state.basket
//* pasamos la última de las funciones, addProduct
    <BasketContext.Provider value={{ basket: state.basket,TOTAL: state.TOTAL, addProduct1 }}>
      {children}
    </BasketContext.Provider>
  );
};
