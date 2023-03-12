/**
 * @jest-environment jsdom
 */

import "@testing-library/react/dont-cleanup-after-each";
import "@testing-library/jest-dom";

import { sortByTitle, sortByGroup, handleBgColors } from "../../utils";
import { mockData } from "../__mocks__/categories";

test("data should be sorted alphabetically", () => {
  const sortedData = sortByTitle(mockData);

  expect(sortedData[0].wording).toMatch(/A/);
  expect(sortedData[1].wording).toMatch(/B/);
  expect(sortedData[2].wording).toMatch(/C/);
  expect(sortedData[3].wording).toMatch(/D/);
});

test("data should be grouped by categorie ids", () => {
  const sortedData = sortByGroup(mockData);

  expect(sortedData["2"]).toHaveLength(2);
  expect(sortedData["2"][0]).toHaveProperty("wording", "B Honoraires");
  expect(sortedData["6"]).toHaveLength(2);
  expect(sortedData["6"][0]).toHaveProperty(
    "wording",
    "A Cession d'une immobilisation (avec TVA)"
  );
  expect(sortedData["other"]).toHaveLength(0);
});

test("Should return the good colors matching", () => {
  expect(handleBgColors("m-blue")).toHaveProperty("bg", "#F1F7FC");
  expect(handleBgColors("m-pink")).toHaveProperty("bg", "#fce7f3");
  expect(handleBgColors()).toHaveProperty("bg", "#FFF5BF");
});
