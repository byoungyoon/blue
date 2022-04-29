import { AreaDetailStateType, AreaStateType } from '../../types/Area.type';

const AREA_ONE_OPEN = 'areaOne/open' as const;
const AREA_ONE_CLOSE = 'areaOne/close' as const;

export const areaOneOpen = (value: AreaStateType, turn: number) => ({
  type: AREA_ONE_OPEN,
  payload: {
    value: value,
    isOpen: true,
    turn: turn,
  },
});

export const areaOneClose = () => ({
  type: AREA_ONE_CLOSE,
});

type AreaOneAction = ReturnType<typeof areaOneOpen> | ReturnType<typeof areaOneClose>;

const initState: AreaDetailStateType = {
  isOpen: false,
};

const AreaOneReducer = (state: AreaDetailStateType = initState, action: AreaOneAction) => {
  switch (action.type) {
    case AREA_ONE_OPEN:
      return { value: action.payload.value, turn: action.payload.turn, isOpen: true };
    case AREA_ONE_CLOSE:
      return { isOpen: false };
    default:
      return state;
  }
};

export default AreaOneReducer;
