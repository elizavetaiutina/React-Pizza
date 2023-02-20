import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaBlock from "./PizzaBlock";

import pizzas from "../assets/pizzas.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={350} />
            <PizzaBlock title="Пепперони" price={325} />
            <PizzaBlock title="Чизбургер-пицца" price={395} />
            <PizzaBlock title="Пепперони" price={325} />
            <PizzaBlock title="Мексиканская" price={350} />
            <PizzaBlock title="Пепперони" price={325} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
