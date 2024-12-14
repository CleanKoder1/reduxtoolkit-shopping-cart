import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { shoppingCartSelect } from "../../../redux/features/shoppingCart/shoppingCartSlice";

const Navbar = () => {
  const shoppingCart = useSelector(shoppingCartSelect);
  return (
    <nav className="w-full min-h-14 items-center h-auto bg-slate-900 shadow-sm flex justify-between p-3 text-white">
      <NavLink to={"/"}>
        <h1 className="font-semibold cursor-pointer">Redux Shopping Cart</h1>
      </NavLink>

      <div className="flex gap-2 items-center  p-3 rounded hover:bg-opacity-90 transition-all ease-in cursor-pointer">
        <FaShoppingCart color="white" size={10} />
        <NavLink to="/shopping-cart">
          <p className="font-semibold text-sm">{shoppingCart.items.length} Carrito</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
