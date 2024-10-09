import products from "../utils/products";
import { useParams } from "react-router-dom";
import Card from "../utils/Card";

function Products() {
  const { category } = useParams();
  const filteredProducts = category ? products.filter(producto => producto.categoria === category): products;

  return (
    <div className="productsContainer">
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