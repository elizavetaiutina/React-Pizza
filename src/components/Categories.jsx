import React from "react";

function Categories() {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((categor, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex == index ? "active" : ""}
            >
              {categor}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
