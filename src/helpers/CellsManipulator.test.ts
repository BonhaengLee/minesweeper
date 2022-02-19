import { getNeighboursItems, incrementNeighbours } from "./CellsManipulator";
import { CellState } from "./Field";

const { empty, bomb } = CellState;

describe("Check neighbours selectors", () => {
  it("With [0, 0] coords", () => {
    expect(getNeighboursItems([0, 0])).toStrictEqual({
      top: [-1, 0],
      topRight: [-1, 1],
      right: [0, 1],
      rightBottom: [1, 1],
      bottom: [1, 0],
      bottomLeft: [1, -1],
      left: [0, -1],
      leftTop: [-1, -1],
    });
  });
  it("With [3, 3] coords", () => {
    expect(getNeighboursItems([3, 3])).toStrictEqual({
      top: [2, 3],
      topRight: [2.4],
      right: [3, 4],
      rightBottom: [4, 4],
      bottom: [4, 3],
      bottomLeft: [4, 2],
      left: [3, 2],
      leftTop: [2, 2],
    });
  });
});
