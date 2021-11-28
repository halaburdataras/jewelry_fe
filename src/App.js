import { useState } from "react";
import "./App.css";
import Catalog from "./component/Catalog";
import FollowUs from "./component/FollowUs";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Modal from "./component/Modal";
import Slider from "./component/Slider";

function App() {
  const [open, setOpen] = useState("close");
  const [openFollow, setOpenFollow] = useState(false);
  if (open === "full") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div className={`App ${open === "full" && "disable"}`}>
      <Header setOpenFollow={setOpenFollow} setOpenCart={setOpen} />
      <section className="main">
        <Slider />
        <Catalog />
      </section>
      <Footer setOpen={setOpen} />
      <FollowUs open={openFollow} setOpen={setOpenFollow} />
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
