import { PlayerIndexType, PlayerType } from '../../types/Player.type';

const PLAYER_UPDATE = 'player/update' as const;
const PLAYER_INSERT = 'player/insert' as const;

export const playerUpdate = () => ({
  type: PLAYER_UPDATE,
});
export const playerInsert = (values: PlayerType, index: string) => ({
  type: PLAYER_INSERT,
  payload: {
    value: values,
    index: index,
  },
});

type PlayerAction = ReturnType<typeof playerUpdate> | ReturnType<typeof playerInsert>;

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
    default:
      return state;
  }
};

export default PlayerReducer;
