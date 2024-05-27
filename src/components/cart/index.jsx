import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { BasketContext,useCart } from "../Conext/BasketContext";

// Componente funcional Cart
// eslint-disable-next-line react/prop-types
const Cart = () => {
//! Importamos el contexto para su USO. Incluye el estado incial {BASKET}
//! igualado a un useContext(NOMBREDELCONTEXTO)
const {basket, TOTAL} = useCart()//useContext(BasketContext)
  // Función para manejar la eliminación de un ítem del carrito
  return (
    
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {/* Mapeamos los ítems del carrito para mostrarlos */}
{/* //! Usamos una propiedad de MUI para mapear LISTITEM */}
{basket.map((item,index) =>
  <ListItem key={index}>
 <ListItemText primary={item.name} />
          <ListItemText primary={item.cantidad} />
   
            </ListItem>)}
{/* //! PAsamos el total a texto para poder pasarlo por listitemtext */}
            <ListItemText primary={`Total: $${TOTAL.toFixed(2)}`} />
          
        {/* Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito */}
      </List>
    </Box>
  );
};

export default Cart;
