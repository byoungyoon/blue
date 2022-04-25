const TURN_UPDATE = 'turn/update' as const;

export const turnUpdate = () => ({
  type: TURN_UPDATE,
});

type TurnAction = ReturnType<typeof turnUpdate>;

const initsState: number = 4;

const TurnReducer = (state: number = initsState, action: TurnAction) => {
  switch (action.type) {
    case TURN_UPDATE:
      return state + 1 > 4 ? 1 : state + 1;
    default:
      return state;
  }
};

export default TurnReducer;
