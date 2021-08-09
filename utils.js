const transformData = data => {
  const transformedData = [];
  Object.keys(data).forEach(key => {
    const cards = data[key];
    cards.forEach(({ score, name, cmc }) => {
      transformedData.push({ score, name, cmc, id: transformedData.length });
    });
  });
  return transformedData;
};

module.exports = transformData;
