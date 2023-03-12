/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockData } from "../__mocks__/categories";

import CategoriesList from "../CategoriesList";

describe("Categories should render properly", () => {
  render(<CategoriesList data={mockData} />);

  test("Categories should render correctly", () => {
    expect(
      screen.getByRole("heading", {
        name: "A Cession d'une immobilisation (avec TVA)",
      })
    );
    expect(
      screen.getByRole("heading", {
        name: "B Honoraires",
      })
    );
    expect(
      screen.getByRole("heading", {
        name: "C Interim",
      })
    );
  });
});
