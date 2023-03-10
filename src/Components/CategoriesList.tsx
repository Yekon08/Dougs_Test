import React, { Dispatch, SetStateAction } from "react";
import { Category } from "../interfaces/categories";
import { FilterView } from "../interfaces/global";
import { sortByTitle, sortByGroup, handleBgColors } from "../utils";
import CategoryCards from "./CategoryCards";

interface Props {
  data: Category[];
  isLoading: boolean;
  activeFilter: FilterView;
  setSelected: Dispatch<SetStateAction<{}>>;
  selected: Category | {};
}

const CategoriesList = ({
  data,
  isLoading,
  activeFilter,
  setSelected,
  selected,
}: Props) => {
  const handleAlphabeticView = sortByTitle(data).map((cat, i) => (
    <CategoryCards
      data={cat}
      alphabetic
      key={i}
      selected={selected}
      setSelected={setSelected}
    />
  ));

  const handleSortByGroup = () => {
    return Object.entries(sortByGroup(data)).map(([id, categories]) => {
      if (categories.length > 0 && categories[0].group) {
        return (
          <div className="groupContainer" key={id}>
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
              {categories.map((cat, i) => (
                <CategoryCards
                  key={i}
                  data={cat}
                  selected={selected}
                  setSelected={setSelected}
                />
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
