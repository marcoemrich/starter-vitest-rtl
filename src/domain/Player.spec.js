import { Player } from "./Player.js";
import { describe, it, expect } from "vitest";

describe("Player.Opponent", () => {
  it("returns the opposite Player", () => {
    expect(Player.opponent(Player.X)).toEqual(Player.O);
    expect(Player.opponent(Player.O)).toEqual(Player.X);
  });
});
