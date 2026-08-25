import { useState } from 'react';
import ProductoCard from './components/productoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  
  const [ordenPrecio, setOrdenPrecio] = useState("defecto");

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
    setOrdenPrecio("defecto");
  };

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria = 
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock = 
      !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (ordenPrecio === "menor-mayor") {
      return a.precio - b.precio;
    }
    if (ordenPrecio === "mayor-menor") {
      return b.precio - a.precio;
    }
    return 0; 
  });

  const disponibles = productos.filter(producto => producto.stock > 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />

        <select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Perifericos">Perifericos</option>
          <option value="Pantallas">Pantallas</option>
          <option value="Audio">Audio</option>
          <option value="Mobiliario">Mobiliario</option>
          <option value="Accesorios">Accesorios</option>
        </select>

        <select
          value={ordenPrecio}
          onChange={(evento) => setOrdenPrecio(evento.target.value)}
        >
          <option value="defecto">Ordenar por precio</option>
          <option value="menor-mayor">Menor precio → Mayor precio</option>
          <option value="mayor-menor">Mayor precio → Menor precio</option>
        </select>
        
        <label>
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) => setSoloDisponibles(evento.target.checked)}
          />
          Mostrar únicamente disponibles
        </label>

        <button type="button" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      <p>Productos encontrados: {productosOrdenados.length}</p>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${formatearPrecio(valorInventario)}</p>

      <section className="productos">
        {productosOrdenados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}

        {productosOrdenados.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : null}
      </section>
    </main>
  );
}

export default App;