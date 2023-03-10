import React from "react";
import { Category } from "../interfaces/categories";
import { FilterView } from "../interfaces/global";
import { sortByTitle, sortByGroup, handleBgColors } from "../utils";
import CategoryCards from "./CategoryCards";

interface Props {
  data: Category[];
  isLoading: boolean;
  activeFilter: FilterView;
}

const CategoriesList = ({ data, isLoading, activeFilter }: Props) => {
  const handleAlphabeticView = sortByTitle(data).map((cat) => (
    <CategoryCards data={cat} alphabetic />
  ));

  const handleSortByGroup = () => {
    return Object.entries(sortByGroup(data)).map(([id, categories]) => {
      if (categories.length > 0 && categories[0].group) {
        return (
          <div className="groupContainer">
            <div
              className="tag"
              style={{
                background: handleBgColors(categories[0].group.color).bg,
                color: handleBgColors(categories[0].group.color).color,
              }}
            >
              <p>{categories[0].group.name}</p>
            </div>
            <div className="cardsContainer">
              {categories.map((cat) => (
                <CategoryCards data={cat} />
              ))}
            </div>
          </div>
        );
      }
    });
  };

  if (isLoading) {
    return (
      <div className="categoriesContainer loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      className={`categoriesContainer ${
        activeFilter === "group" ? "group" : "alphabetic"
      }`}
    >
      {activeFilter === "group" ? handleSortByGroup() : handleAlphabeticView}
    </div>
  );
};

export default CategoriesList;
