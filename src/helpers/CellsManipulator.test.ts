import { incrementNeighbours } from "./CellsManipulator";
import { CellState } from "./Field";

const { empty, bomb } = CellState;

describe("Check neighbours selectors", () => {
  describe("Simple cases", () => {
    it("Field with only one item", () => {
      expect(incrementNeighbours([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
    });
    it("Field 2x2 with one mine", () => {
      expect(
        incrementNeighbours(
          [0, 0],
          [
            [bomb, empty],
            [empty, empty],
          ]
        )
      ).toStrictEqual([
        [bomb, 1],
        [1, 1],
      ]);
    });
  });
});
