export const Player = {
  X: "X",
  O: "O",
  opponent: (player) => (player === Player.O ? Player.X : Player.O),
};
