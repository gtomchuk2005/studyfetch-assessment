export const sortNames = (explanations: Explanation[], ascending: boolean) => {
  return [...explanations].sort((a, b) => {
    if (a.name < b.name) {
      return ascending ? -1 : 1;
    } else if (a.name > b.name) {
      return ascending ? 1 : -1;
    } else {
      return 0;
    }
  });
};
