import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
