import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import "../global.scss";
import { Category } from "../interfaces/categories";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const urls = [
      "http://localhost:3000/all-categories",
      "http://localhost:3000/visible-categories",
    ];
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
      .then(([allCategories, visibleCategories]: any) => {
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

  console.log("filtered data: ", data);

  return (
    <main className="test">
      {isLoading && <p>Loading...</p>}
      <p>not loading</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
