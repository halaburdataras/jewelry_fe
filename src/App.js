import { useState } from "react";
import "./App.css";
import Catalog from "./component/Catalog";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Modal from "./component/Modal";
import Slider from "./component/Slider";

function App() {
  const [open, setOpen] = useState("close");
  if (open === "full") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div className={`App ${open === "full" && "disable"}`}>
      <Header setOpen={setOpen} />
      <section className="main">
        <Slider />
        <Catalog />
      </section>
      <Footer setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
