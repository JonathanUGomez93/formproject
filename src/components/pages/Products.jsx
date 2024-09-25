import products from "../utils/products"

function Products() {
    return (
      <div>
      {products.map((producto, index) => (
        <div key={index}>
          <h2>{producto.nombre}</h2>
          <p>Talle: {producto.talle}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Color: {producto.color}</p>
          <img src={ producto.img} alt="" />
        </div>
      ))}
    </div>
    )
  }
  
  export default Products