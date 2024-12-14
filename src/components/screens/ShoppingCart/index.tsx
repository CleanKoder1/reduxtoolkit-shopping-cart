import { BsFillCartDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  shoppingCartSelect,
} from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { TItem } from "../../../types";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(shoppingCartSelect);

  const handleRemoveItem = (item: TItem) => {
    dispatch(removeItem(item));
  };
  return (
    <main className="w-screen h-auto min-h-screen flex flex-colflex flex-col gap-3 p-3">
      <h1 className="text-3xl text-slate-900 font-bold">Articulos venta</h1>

      <div className="flex min-h-full h-auto gap-3 flex-wrap">
        {shoppingCart && shoppingCart.items.length > 0 ? (
          shoppingCart.items.map((currentItem) => (
            <article
              key={currentItem.cartId}
              style={{ height: "300px" }}
              className="border rounded shadow text-slate-900 p-2 sm:w-1/2 md:w-64"
            >
              <div className="image-wrapper w-full h-1/2">
                <img
                  src={currentItem.image}
                  alt={currentItem.cartId}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full items-center flex flex-col gap-1">
                <h2 className="text-xl font-semibold w-full">
                  {currentItem.name}
                </h2>
                <p className="text-sm w-full">{currentItem.description}</p>
                <p className="w-full text-xs font-bold">
                  ${currentItem.price} MXN
                </p>
                <button
                  onClick={() => handleRemoveItem(currentItem)}
                  className="bg-slate-900 transition-all ease-in-out text-white hover:opacity-80 p-1 w-full flex items-center justify-center gap-3"
                >
                  <BsFillCartDashFill size={10} color="white" />
                  <p className="text-sm">Quitar del carrito</p>
                </button>
              </div>
            </article>
          ))
        ) : (
          <p>No hay elementos en el carrito</p>
        )}
      </div>
    </main>
  );
};

export default ShoppingCart;
