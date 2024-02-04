const search = (docs = [], query = "") => {
  if (!query) {
    return docs.map((doc) => doc.id);
  }

  if (docs.length === 0) {
    return [];
  }

  return docs
    .filter((doc) =>
      doc.text
        .split(/\s/)
        .some((word) => word.toLowerCase() === query.toLowerCase())
    )
    .map((doc) => doc.id);
};

export default search;
