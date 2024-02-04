const search = (docs = [], query = "") => {
  if (!query) {
    return docs.map((doc) => doc.id);
  }

  if (docs.length === 0) {
    return [];
  }

  const preparedQuery = prepareWord(query);
  const preparedDocs = docs.map((doc) => ({
    ...doc,
    text: doc.text.split(/\s/).map((word) => prepareWord(word)),
  }));

  return preparedDocs
    .filter((doc) => doc.text.some((word) => word === preparedQuery))
    .map((doc) => {
      return {
        ...doc,
        count: doc.text.reduce((acc, word) => {
          if (word === preparedQuery) {
            return acc + 1;
          }
          return acc;
        }, 0),
      };
    })
    .toSorted((a, b) => b.count - a.count)
    .map((doc) => doc.id);
};

export default search;

const prepareWord = (text = "") => {
  return text.match(/\w+/g)?.join("").toLowerCase() || "";
};
