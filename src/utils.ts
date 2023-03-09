import { Category } from "./interfaces/categories";

export const sortByTitle = (data: Category[]) =>
  data.sort((a, b) => {
    if (a.wording < b.wording) {
      return -1;
    }
    if (a.wording > b.wording) {
      return 1;
    }
    return 0;
  });

export const sortByGroup = (data: Category[]) =>
  data.reduce(
    (result: { [key: number]: Category[] }, currentValue: Category) => {
      currentValue.group &&
        (result[currentValue.group.id] =
          result[currentValue.group.id] || []).push(currentValue);
      return result;
    },
    {}
  );

export const handleBgColors = (value: string) => {
  switch (value) {
    case "m-blue":
      return {
        bg: "#F1F7FC",
        color: "#11ABEC",
      };
    case "m-red":
      return {
        bg: "#FFECE6",
        color: "#FD755F",
      };
    case "m-pink":
      return {
        bg: "#fce7f3",
        color: "#db2777",
      };
    case "m-purple":
      return {
        bg: "#f3e8ff",
        color: "#9333ea",
      };
    case "m-green":
      return {
        bg: "#dcfce7",
        color: "#16a34a",
      };

    default:
      return {
        bg: "#FFF5BF",
        color: "#FAA11C",
      };
  }
};
