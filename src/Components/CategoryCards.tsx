import React, { Dispatch, SetStateAction } from "react";
import { Category } from "../interfaces/categories";
import { handleBgColors } from "../utils";

interface Props {
  data: Category;
  alphabetic?: boolean;
  setSelected: Dispatch<SetStateAction<{}>>;
  selected: Category | {};
}

const CategoryCards = ({ data, alphabetic, setSelected, selected }: Props) => {
  return (
    <div
      onClick={() => (selected === data ? setSelected({}) : setSelected(data))}
      className={`categoryCard ${alphabetic ? "alphabeticCard" : "groupCard"} ${
        selected === data && "activeCard"
      }`}
    >
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
