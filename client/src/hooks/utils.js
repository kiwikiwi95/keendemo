export const sort = (cards, sortConfig) => {
  const { term, direction } = sortConfig;
  const sortedCards = cards.sort((a, b) => {
    if (typeof a[term] === 'string') {
      if (a[term].localeCompare(b[term]) < 0)
        return direction === 'ascending' ? -1 : 1;
      if (a[term].localeCompare(b[term]) > 0)
        return direction === 'ascending' ? 1 : -1;
      return 0;
    } else {
      if (a[term] < b[term]) return direction === 'ascending' ? -1 : 1;
      if (a[term] > b[term]) return direction === 'ascending' ? 1 : -1;
      return 0;
    }
  });
  return sortedCards;
};
