/* eslint-disable react/prop-types */
// components/ProductCard.jsx

import React, { useContext, useState, useReducer } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

//* Importamos el contexto y la función CartProvider que usa 
//* la función reducer y contiene el addProduct1
import { BasketContext, CartProvider} from "../Conext/BasketContext";

// Componente para renderizar la tarjeta del producto
const ProductCard = ({ product }) => {
  const {addProduct1} = useContext(BasketContext)

  return (
 
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s ease-in-out",
        "&:hover": { boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
      }}
    >
      <CardActionArea>
        {/* Imagen del producto */}
        <CardMedia
          component="img"
          height="200"
          image={product?.images?.[0]?.url}
          alt={product.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <CardContent>
          {/* Nombre del producto */}
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.name}
          </Typography>
          {/* Descripción del producto */}
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          {/* Precio del producto */}
          <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        {/* //! aquí llamamos a la funcioón normal, sea reducer o no */}
         <Button onClick={()=>addProduct1(product)}>Añadir al carrito</Button>        
        {/* Botón para añadir al carrito */}
      </CardActions>
    </Card>

  );
};

export default ProductCard;
