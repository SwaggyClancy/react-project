import Card from "./components/Card.js";
import Drawer from "./components/Drawer.js";
import Header from "./components/Header.js";

const arr = [
  {
    name: "Мужские кроссовки Nike blazer Mid Suede",
    price: 12999,
  },
  {
    name: "Мужские кроссовки Nike Air Max Suede",
    price: 15600,
  },
];

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
          <Card title="asd" price={123} imageURL={"/img/sneakers/1.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default App;
