import React, { useEffect, useState, useMemo } from "react";
import type { HeadFC } from "gatsby";
import "../styles/styles.scss";
import { Category } from "../interfaces/categories";
import Header from "../Components/Header";
import CategoriesList from "../Components/CategoriesList";
import Footer from "../Components/Footer";
import { FilterView } from "../interfaces/global";
import Filter from "../Components/Filter";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterView>("group");
  const [query, setQuery] = useState("");

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

  const filteredData = useMemo(() => {
    return data.filter((cat) => {
      return cat.group?.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [data, query]);

  return (
    <div className="container">
      <Header activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="maxWidth">
        <Filter query={query} setQuery={setQuery} />
        <CategoriesList
          data={filteredData}
          isLoading={isLoading}
          activeFilter={activeFilter}
        />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
