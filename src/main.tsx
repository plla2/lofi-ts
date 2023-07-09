import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.scss";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
