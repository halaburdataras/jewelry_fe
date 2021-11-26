import "./App.css";
import Catalog from "./component/Catalog";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Slider from "./component/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Slider />
        <Catalog />
      </section>
      <Footer />
    </div>
  );
}

export default App;
