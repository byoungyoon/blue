import { PlayerIndexType, PlayerType } from '../../types/Player.type';

const PLAYER_UPDATE = 'player/update' as const;
const PLAYER_INSERT = 'player/insert' as const;
const PLAYER_POINT_UPDATE = 'player/pointUpdate' as const;
const PLAYER_TRANSFER = 'player/transfer' as const;
const PLAYER_GAME_OVER = 'play/gameOver' as const;

export const playerUpdate = (player: string, nextIndex: number) => ({
  type: PLAYER_UPDATE,
  payload: {
    player: player,
    index: nextIndex,
  },
});
export const playerInsert = (values: PlayerType, index: string) => ({
  type: PLAYER_INSERT,
  payload: {
    value: values,
    index: index,
  },
});
export const playerPointUpdate = (player: number, sum: number) => ({
  type: PLAYER_POINT_UPDATE,
  payload: {
    player: player,
    sum: sum,
  },
});
export const playerTransfer = (to: number, from: number, point: number) => ({
  type: PLAYER_TRANSFER,
  payload: {
    to: to,
    from: from,
    point: point,
  },
});
export const playerGameOver = (player: number) => ({
  type: PLAYER_GAME_OVER,
  payload: {
    player: player,
  },
});

type PlayerAction =
  | ReturnType<typeof playerUpdate>
  | ReturnType<typeof playerInsert>
  | ReturnType<typeof playerPointUpdate>
  | ReturnType<typeof playerTransfer>
  | ReturnType<typeof playerGameOver>;

const initState: PlayerIndexType = {
  player1: {
    key: 1,
    point: 0,
    name: '',
    status: false,
    index: 0,
    color: 'red',
  },
  player2: {
    key: 2,
    point: 0,
    name: '',
    status: false,
    index: 0,
    color: 'skyblue',
  },
  player3: {
    key: 3,
    point: 0,
    name: '',
    status: false,
    index: 0,
    color: 'purple',
  },
  player4: {
    key: 4,
    point: 0,
    name: '',
    status: false,
    index: 0,
    color: 'pink',
  },
};

const PlayerReducer = (state: PlayerIndexType = initState, action: PlayerAction) => {
  switch (action.type) {
    case PLAYER_INSERT:
      return { ...state, [action.payload.index]: { ...state[action.payload.index], ...action.payload.value } };
    case PLAYER_UPDATE:
      return { ...state, [action.payload.player]: { ...state[action.payload.player], index: action.payload.index } };
    case PLAYER_POINT_UPDATE:
      return {
        ...state,
        [`player${action.payload.player}`]: {
          ...state[`player${action.payload.player}`],
          point: +(state[`player${action.payload.player}`].point - action.payload.sum).toFixed(2),
        },
      };
    case PLAYER_TRANSFER:
      return {
        ...state,
        [`player${action.payload.to}`]: {
          ...state[`player${action.payload.to}`],
          point: state[`player${action.payload.to}`].point - action.payload.point,
        },
        [`player${action.payload.from}`]: {
          ...state[`player${action.payload.from}`],
          point: state[`player${action.payload.from}`].point + action.payload.point,
        },
      };

    case PLAYER_GAME_OVER:
      return {
        ...state,
        ...state,
        [`player${action.payload.player}`]: {
          ...state[`player${action.payload.player}`],
          status: false,
        },
      };
    default:
      return state;
  }
};

export default PlayerReducer;
