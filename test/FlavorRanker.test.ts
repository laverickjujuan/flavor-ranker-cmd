import FlavorRanker from "../src/helpers/FlavorRanker";

describe("FlavorRanker", () => {
  let flavorRanker: FlavorRanker;

  beforeEach(() => {
    flavorRanker = new FlavorRanker();
  });

  test("should calculate points correctly for a single vote", () => {
    flavorRanker.processVote("Banana Cabana", 1);
    expect(flavorRanker["flavors"]["Banana Cabana"]).toBe(5);
  });

  test("should calculate total points for multiple votes", () => {
    flavorRanker.processVote("Banana Cabana", 1);
    flavorRanker.processVote("Banana Cabana", 2);
    flavorRanker.processVote("Grape Escape", 1);

    expect(flavorRanker["flavors"]["Banana Cabana"]).toBe(5 + 3);
    expect(flavorRanker["flavors"]["Grape Escape"]).toBe(5);
  });

  test("should handle ties and sort by name length", () => {
    flavorRanker.processVote("Banana Cabana", 1);
    flavorRanker.processVote("Grape Escape", 1);
    flavorRanker.processVote("Guava Java", 1);

    const sortedFlavors = flavorRanker.getSortedFlavors();

    expect(sortedFlavors[0]).toBe("Guava Java, 5 pts");
    expect(sortedFlavors[1]).toBe("Grape Escape, 5 pts");
    expect(sortedFlavors[2]).toBe("Banana Cabana, 5 pts");
  });

  test("should handle multiple votes for multiple flavors", () => {
    flavorRanker.processVote("Banana Cabana", 1);
    flavorRanker.processVote("Grape Escape", 1);
    flavorRanker.processVote("Banana Cabana", 2);
    flavorRanker.processVote("Guava Java", 3);

    const sortedFlavors = flavorRanker.getSortedFlavors();

    expect(sortedFlavors[0]).toBe("Banana Cabana, 8 pts");
    expect(sortedFlavors[1]).toBe("Grape Escape, 5 pts");
    expect(sortedFlavors[2]).toBe("Guava Java, 2 pts");
  });
});
