import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={About} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
