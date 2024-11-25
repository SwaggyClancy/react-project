import Card from "./components/Card.js";
import Drawer from "./components/Drawer.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="\img\search.svg" alt="search"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
