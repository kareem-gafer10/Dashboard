import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeProvider from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
