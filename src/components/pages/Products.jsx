import products from "../utils/products";
import { useParams } from "react-router-dom";
import Card from "../utils/Card";

function Products() {
  const { cat } = useParams();
  const filteredProducts = cat ? products.filter(producto => producto.categoria === cat): products;

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((producto, index) => (
          < Card
            key={index}
            nombre={producto.nombre}
            talle={producto.talle}
            precio={producto.precio}
            img={producto.img}
          />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
}
export default Products;