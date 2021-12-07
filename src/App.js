import { useEffect, useState } from "react";
import "./App.css";
import Catalog from "./pages/Catalog";
import FollowUs from "./component/FollowUs";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Modal from "./component/Modal";
import Main from "./pages/Main";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { getCart } from "./redux/cart/cart.actions";
import Goods from "./pages/Goods";

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState("close");
  const [openFollow, setOpenFollow] = useState(false);

  if (open === "full") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <div className={`App ${open === "full" && "disable"}`}>
      <Header setOpenFollow={setOpenFollow} setOpenCart={setOpen} />
      <section className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/goods/:id" exact element={<Goods />} />
        </Routes>
      </section>
      <Footer setOpenFollow={setOpenFollow} setOpenCart={setOpen} />
      <FollowUs open={openFollow} setOpen={setOpenFollow} />
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
