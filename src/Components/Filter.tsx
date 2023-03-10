import React, { Dispatch, SetStateAction } from "react";

interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Filter = ({ query, setQuery }: Props) => {
  return (
    <div className="filterContainer">
      <div className="searchContainer">
        <label htmlFor="search">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path
              d="M5.97924 10.7085C8.31498 10.7085 10.2085 8.81498 10.2085 6.47924C10.2085 4.14349 8.31498 2.25 5.97924 2.25C3.64349 2.25 1.75 4.14349 1.75 6.47924C1.75 8.81498 3.64349 10.7085 5.97924 10.7085Z"
              stroke="#001A25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.96948 9.46945L12.2496 12.75"
              stroke="#001A25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Rechercher une catégorie"
          name="search"
          id="search"
        />
      </div>
    </div>
  );
};

export default Filter;
