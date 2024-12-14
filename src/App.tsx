import "./App.css";
import { FaCartPlus } from "react-icons/fa";
import { items } from "./api/data";
import { TItem } from "./types";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/features/shoppingCart/shoppingCartSlice";
function App() {
  const dispatch = useDispatch()
  const handleAddItem = (item: TItem) => {
    dispatch(addItem(item))
  };

  return (
    <main className="w-screen h-auto min-h-screen flex flex-col gap-6 overflow-hidden p3">
      <h1 className="text-3xl text-slate-900 font-bold">Articulos venta</h1>

      <div className="flex min-h-full h-auto gap-3 flex-wrap">
        {items && items.length > 0 ? (
          items.map((item) => (
            <article
              style={{ height: "350px" }}
              className="border rounded shadow text-slate-900 p-2 sm:w-1/2 md:w-72"
              key={item.id}
            >
              <div className="image-wrapper w-full h-1/2">
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full items-center flex flex-col gap-1">
                <h2 className="text-xl font-semibold w-full">{item.name}</h2>
                <p className="text-sm w-full">{item.description}</p>
                <p className="w-full text-xs font-bold">${item.price} MXN</p>
                <button
                  onClick={() => handleAddItem(item)}
                  className="bg-slate-900 transition-all ease-in-out text-white hover:opacity-80 p-1 w-full flex items-center justify-center gap-3"
                >
                  <FaCartPlus size={10} color="white" />
                  <p className="text-sm">Agregar carrito</p>
                </button>
              </div>
            </article>
          ))
        ) : (
          <p>No hay articulos </p>
        )}
      </div>
    </main>
  );
}

export default App;
