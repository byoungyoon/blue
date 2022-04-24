export type DiceType = {
  tx: number;
  ty: number;
  rx: number;
  ry: number;
  num: number;
};

export type RollType = {
  dice1: DiceType;
  dice2: DiceType;
};

export interface DiceProps {
  roll: number;
}

export type DiceStateType = {
  dice: number;
  roll: number;
};
