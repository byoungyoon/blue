const TURN_UPDATE = 'turn/update' as const;

export const turnUpdate = (nextTurn: number) => ({
  type: TURN_UPDATE,
  payload: {
    turn: nextTurn,
  },
});

type TurnAction = ReturnType<typeof turnUpdate>;

const initsState: number = 1;

const TurnReducer = (state: number = initsState, action: TurnAction) => {
  switch (action.type) {
    case TURN_UPDATE:
      return action.payload.turn;
    default:
      return state;
  }
};

export default TurnReducer;
