import { PlayerType } from '../../types/Player.type';

const PLAYER_UPDATE = 'player/update' as const;
const PLAYER_INSERT = 'player/insert' as const;

export const playerUpdate = () => ({
  type: PLAYER_UPDATE,
});
export const playerInsert = (values: PlayerType) => ({
  type: PLAYER_INSERT,
  payload: values,
});

type PlayerAction = ReturnType<typeof playerUpdate> | ReturnType<typeof playerInsert>;

const initState: Array<PlayerType> = [];

const PlayerReducer = (state: Array<PlayerType> = initState, action: PlayerAction) => {
  switch (action.type) {
    case PLAYER_INSERT:
      return state.concat(action.payload);
    case PLAYER_UPDATE:
      break;
    default:
      return state;
  }
};

export default PlayerReducer;
