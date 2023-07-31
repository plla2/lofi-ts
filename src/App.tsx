import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
