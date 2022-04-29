import { PlayerIndexType, PlayerType } from '../../types/Player.type';

const PLAYER_UPDATE = 'player/update' as const;
const PLAYER_INSERT = 'player/insert' as const;
const PLAYER_POINT_UPDATE = 'player/pointUpdate' as const;

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

type PlayerAction =
  | ReturnType<typeof playerUpdate>
  | ReturnType<typeof playerInsert>
  | ReturnType<typeof playerPointUpdate>;

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
    default:
      return state;
  }
};

export default PlayerReducer;
