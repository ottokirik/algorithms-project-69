import search from "../src";

const doc1 = {
  id: "doc1",
  text: "I can't shoot straight unless I've had a pint!",
};
const doc2 = { id: "doc2", text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: "doc3", text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

describe("search testing", () => {
  it("search return empty array with empty input", () => {
    expect(search([], "shoot")).toEqual([]);
  });

  it("search return docs ids with query", () => {
    expect(search(docs, "shoot")).toEqual(["doc1", "doc2"]);
  });

  it("search return all ids with empty query", () => {
    expect(search(docs, "")).toEqual(["doc1", "doc2", "doc3"]);
  });
});
