function ProductoCard({ producto }) {
  const { nombre, precio, categoria, stock } = producto;
  const estado = stock  > 0 ? 'Disponible' : 'Agotado';
  const mostrarProducto = () => {
    alert(`Selecionaste ${nombre}`)
  };

  return (
    <article className="producto-card">
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
      <strong>{estado}</strong>
      <br/>
        <button onClick={mostrarProducto}
        disabled={stock === 0}
        >
            {
                stock === 0 
                ? "Ver Producto"
                :"Agotado"
            }
        </button>
        </article>
  );
}

export default ProductoCard;