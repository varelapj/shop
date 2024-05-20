import { Layout } from "../../components/layaout";
import ProductList from "../../components/product/productList";
import { BasketContext, CartProvider } from "../../components/Conext/BasketContext";

export const Home = () => {
  return (
   
    <Layout>
      {/* Todo el contenido de la página Home */}
           {/* { //!Envolvemos product list que contiene todos los componentes que van a usar el basket con él para poder usarlo */}
     
      <ProductList />

      {/* Más contenido... */}
    </Layout>
   
  );
};
