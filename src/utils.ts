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
