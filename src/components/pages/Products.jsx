import products from "../utils/products";
import { useParams } from "react-router-dom";

function Products() {
  const { cat } = useParams();
  const filteredProducts = cat ? products.filter(producto => producto.categoria === cat): products;

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((producto, index) => (
          <div key={index}>
            <h2>{producto.nombre}</h2>
            <p>Talle: {producto.talle}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Color: {producto.color}</p>
            <img src={producto.img} alt={producto.nombre} />
          </div>
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
}
export default Products;
