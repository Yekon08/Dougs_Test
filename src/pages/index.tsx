import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.scss";
import { Category } from "../interfaces/categories";
import Header from "../Components/Header";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);
  const [activeFilter, setActiveFilter] = useState<"group" | "alphabetic">(
    "group"
  );

  useEffect(() => {
    const urls = [
      "http://localhost:3000/all-categories",
      "http://localhost:3000/visible-categories",
    ];
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
      .then(([allCategories, visibleCategories]: Category[][]) => {
        const visibleCategoriesId = visibleCategories.map(
          (categoryId: { id: number }) => categoryId.id
        );
        const filteredCategories = allCategories.filter((category: Category) =>
          visibleCategoriesId.includes(category.id)
        );
        setData(filteredCategories);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      {isLoading && <p>Loading...</p>}
      <p>not loading</p>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
