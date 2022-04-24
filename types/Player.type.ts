export type PlayerIndexType = {
  [key: string]: PlayerType;
  player1: PlayerType;
  player2: PlayerType;
  player3: PlayerType;
  player4: PlayerType;
};

export type PlayerType = {
  key: number;
  name: string;
  point: number;
  status: boolean;
  index: number;
  color?: 'red' | 'skyblue' | 'purple' | 'pink';
};
