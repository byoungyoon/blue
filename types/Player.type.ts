export type PlayerIndexType = {
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
};
