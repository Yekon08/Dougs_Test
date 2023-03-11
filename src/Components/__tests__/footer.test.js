/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Footer from "../Footer";

test("Btn text should be Selectionner la catégorie", () => {
  render(<Footer />);
  expect(screen.getByRole("button")).toHaveTextContent(
    "Sélectionner la catégorie"
  );
});
