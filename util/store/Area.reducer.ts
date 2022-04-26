import { AreaConstants } from '../../constants/Area.constants';
import { AreaStateType } from '../../types/Area.type';

const AREA_SELECT = 'area/select' as const;

export const areaSelect = (key: number) => ({
  type: AREA_SELECT,
  payload: {
    key: key,
  },
});

type AreaAction = ReturnType<typeof areaSelect>;

const setInitsSate = () => {
  let result = [] as Array<AreaStateType>;
  Object.keys(AreaConstants).map((key) => {
    Object.values(AreaConstants[key]).map((value) => {
      return result.push({
        ...value,
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
    case AREA_SELECT:
      return state;
    default:
      return state;
  }
};

export default AreaReducer;
