import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  const [arrPizzas, setArrPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);

    const categoryUrl = `${categoryId > 0 ? `category=${categoryId}` : ""}`;

    fetch(`https://63f763ae833c7c9c6082ef1d.mockapi.io/items?${categoryUrl}`)
      .then((res) => res.json())
      .then((arr) => {
        setArrPizzas(arr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}.`);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => {
              return <Skeleton key={index} />;
            })
          : arrPizzas.map((obj, index) => {
              return <PizzaBlock key={index} {...obj} />;
            })}
      </div>
    </div>
  );
}

export default Home;
