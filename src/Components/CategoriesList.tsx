import React from "react";
import { Category } from "../interfaces/categories";
import { sortByTitle } from "../utils";
import CategoryCards from "./CategoryCards";

interface Props {
  data: Category[];
  isLoading: boolean;
  activeFilter: "group" | "alphabetic";
}

const CategoriesList = ({ data, isLoading, activeFilter }: Props) => {
  const handleAlphabeticView = sortByTitle(data).map((cat) => (
    <CategoryCards data={cat} alphabetic />
  ));

  if (isLoading) {
    return (
      <div className="categoriesContainer loading">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="categoriesContainer">
      {activeFilter === "group" ? <p>not handle</p> : handleAlphabeticView}
    </div>
  );
};

export default CategoriesList;
