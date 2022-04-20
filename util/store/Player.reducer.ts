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
  },
  player2: {
    key: 2,
    point: 0,
    name: '',
    status: false,
  },
  player3: {
    key: 2,
    point: 0,
    name: '',
    status: false,
  },
  player4: {
    key: 2,
    point: 0,
    name: '',
    status: false,
  },
};

const PlayerReducer = (state: PlayerIndexType = initState, action: PlayerAction) => {
  switch (action.type) {
    case PLAYER_INSERT:
      return { ...state, [action.payload.index]: action.payload.value };
    case PLAYER_UPDATE:
    default:
      return state;
  }
};

export default PlayerReducer;
