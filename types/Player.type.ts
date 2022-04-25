export type PlayerIndexType<C = PlayerType> = {
  [key: string]: C;
  player1: C;
  player2: C;
  player3: C;
  player4: C;
};

export type PlayerType = {
  key: number;
  name: string;
  point: number;
  status: boolean;
  index: number;
  color?: 'red' | 'skyblue' | 'purple' | 'pink';
};
