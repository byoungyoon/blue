export type DiceType = {
  tx: number;
  ty: number;
  rx: number;
  ry: number;
};

export type RollType = {
  dice1: DiceType;
  dice2: DiceType;
};

export interface DiceProps {
  roll: boolean;
}
