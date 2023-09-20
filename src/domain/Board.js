const cols = [0, 1, 2];
const rows = cols;
const rowsOrCols = cols;
const posToString = (pos) => `${pos.x}/${pos.y}`;
const winnerOfTwoCells = (symbol1, symbol2) => (symbol1 === symbol2 ? symbol1 : undefined);

const or = (a, b) => a || b;

export const create = () => ({});
export const mark = (player, pos, board) => ({ ...board, [posToString(pos)]: player });
export const at = (pos, board) => board[posToString(pos)];

const winByDiag1 = (board) =>
  rows.map((xy) => at({ x: xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByDiag2 = (board) =>
  rows.map((xy) => at({ x: 2 - xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByRowY = (y, board) => cols.map((x) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByColX = (x, board) => rows.map((y) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByRow = (board) => winByRowOrCol(winByRowY, board);
const winByCol = (board) => winByRowOrCol(winByColX, board);
const winByRowOrCol = (winByRowOrColXY, board) =>
  rowsOrCols.map((xOrY) => winByRowOrColXY(xOrY, board)).reduce(or);

export const winner = (board) =>
  [winByRow, winByCol, winByDiag1, winByDiag2]
    .map((winCondition) => winCondition(board))
    .reduce(or);

export const positions = () => [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
];
