import { AreaConstants } from '../../constants/Area.constants';
import { AreaStateType } from '../../types/Area.type';

const AREA_UPDATE = 'area/update' as const;
const AREA_RESET = 'area/reset' as const;

export const areaUpdate = (key: number, player: number, e1: boolean, e2: boolean, e3: boolean, e4: boolean) => ({
  type: AREA_UPDATE,
  payload: {
    key: key,
    player: player,
    possession: {
      e1: e1,
      e2: e2,
      e3: e3,
      e4: e4,
    },
  },
});

export const areaReset = (player: number) => ({
  type: AREA_RESET,
  payload: {
    player: player,
  },
});

type AreaAction = ReturnType<typeof areaUpdate> | ReturnType<typeof areaReset>;

const setInitsSate = () => {
  let result = [] as Array<AreaStateType>;
  Object.keys(AreaConstants).map((key) => {
    Object.values(AreaConstants[key]).map((value) => {
      return result.push({
        ...value,
        player: 0,
        possession: {
          e1: false,
          e2: false,
          e3: false,
          e4: false,
        },
      });
    });
  });

  return result;
};

const initsSate = setInitsSate();

const AreaReducer = (state: Array<AreaStateType> = initsSate, action: AreaAction) => {
  switch (action.type) {
    case AREA_UPDATE:
      return state.map((key) =>
        key.key === action.payload.key
          ? { ...key, player: action.payload.player, possession: action.payload.possession }
          : key,
      );
    case AREA_RESET:
      return state.map((key) =>
        key.player === action.payload.player
          ? {
              ...key,
              player: 0,
              possession: {
                e1: false,
                e2: false,
                e3: false,
                e4: false,
              },
            }
          : key,
      );
    default:
      return state;
  }
};

export default AreaReducer;
