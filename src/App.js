import { useState } from "react";
import "./App.css";
import Cart from "./component/Cart";
import Catalog from "./component/Catalog";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Slider from "./component/Slider";

function App() {
  const [open, setOpen] = useState("close");

  return (
    <div className="App">
      <Header setOpen={setOpen} />
      <section className="main">
        <Slider />
        <Catalog />
      </section>
      <Footer setOpen={setOpen} />
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
