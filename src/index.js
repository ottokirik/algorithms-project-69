const search = (docs = [], query = "") => {
  if (!query) {
    return docs.map((doc) => doc.id);
  }

  if (docs.length === 0) {
    return [];
  }

  const preparedQuery = getOnlyWords(query).toLowerCase();
  const preparedDocs = docs.map((doc) => ({
    ...doc,
    text: doc.text.split(/\s/).map((word) => getOnlyWords(word).toLowerCase()),
  }));

  return preparedDocs
    .filter((doc) => doc.text.some((word) => word === preparedQuery))
    .map((doc) => doc.id);
};

export default search;

const getOnlyWords = (text = "") => {
  return text.match(/\w+/g)?.join("") || "";
};
