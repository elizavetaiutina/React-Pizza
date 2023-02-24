import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home({ valueSearch }) {
  const [arrPizzas, setArrPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: "популярности", property: "-rating" });

  React.useEffect(() => {
    setIsLoading(true);

    const categoryUrl = categoryId > 0 ? `category=${categoryId}` : "";
    const orderUrl = sortType.property.includes("-") ? "desc" : "asc";
    const sortUrl = sortType.property.replace("-", "");
    const searchUrl = valueSearch ? `&search=${valueSearch}` : "";

    fetch(
      `https://63f763ae833c7c9c6082ef1d.mockapi.io/items?${categoryUrl}&sortBy=${sortUrl}&order=${orderUrl}${searchUrl}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setArrPizzas(arr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}.`);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, valueSearch]);

  const skeletons = [...new Array(6)].map((_, index) => {
    return <Skeleton key={index} />;
  });

  const pizzas = arrPizzas.map((obj, index) => {
    return <PizzaBlock key={index} {...obj} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items"> {isLoading ? skeletons : pizzas}</div>
    </div>
  );
}

export default Home;
