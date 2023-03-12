/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("Header", () => {
  render(<Header activeFilter="group" />);

  test("Title should be Catégories", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Catégories");
  });

  test("Selected btn should be Groupe de catégorie", () => {
    expect(
      screen.getByRole("button", {
        name: /groupe de catégorie/i,
      })
    ).toHaveClass("activeBtn");
  });
});
