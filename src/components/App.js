import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaBlock from "./PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";

function App() {
  const [arrPizzas, setArrPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63f763ae833c7c9c6082ef1d.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setArrPizzas(arr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}.`);
      });
  }, []);

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
            {isLoading
              ? [...new Array(9)].map((_, index) => {
                  return <Skeleton key={index} />;
                })
              : arrPizzas.map((obj, index) => {
                  return <PizzaBlock key={index} {...obj} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
