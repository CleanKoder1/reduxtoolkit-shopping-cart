import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { Navbar } from "./components/template";
import { ShoppingCart } from "./components/screens";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
