import React from "react";
import { Category } from "../interfaces/categories";

interface Props {
  selected: Category;
}

const Footer = ({ selected }: Props) => {
  return (
    <footer>
      <div className="maxWidth">
        <button
          onClick={() => {
            selected && selected.group
              ? alert(
                  `Catégorie selectionnée : ${selected.group.name}
                 `
                )
              : alert("Aucune catégorie selectionnée");
          }}
        >
          Sélectionner la catégorie
        </button>
      </div>
    </footer>
  );
};

export default Footer;
