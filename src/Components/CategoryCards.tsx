import React from "react";
import { Category } from "../interfaces/categories";
import { handleBgColors } from "../utils";

interface Props {
  data: Category;
  alphabetic?: boolean;
}

const CategoryCards = ({ data, alphabetic }: Props) => {
  return (
    <div className="categoryCard">
      {alphabetic && data.group && (
        <div className="tag">
          <span
            style={{
              background: handleBgColors(data.group.color).bg,
              color: handleBgColors(data.group.color).color,
            }}
          >
            {data.group.name}
          </span>
        </div>
      )}
      <h6>{data.wording}</h6>
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

export default CategoryCards;
