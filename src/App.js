import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [prop, setProp] = useState(null);
  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/info_usuario.json?key=5c07ee00"
      );
      const data = await response.json();
      const randomId = Math.floor(Math.random() * data.length);
      setProp(data[randomId]);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <Home />
      <Login />
      <Header prop={prop} />
    </div>
  );
}

export default App;
