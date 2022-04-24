const DICE_UPDATE = 'dice/update' as const;

export const diceUpdate = (dice: number) => ({
  type: DICE_UPDATE,
  payload: {
    dice: dice,
  },
});

type DiceAction = ReturnType<typeof diceUpdate>;

const initsState: number = 0;

const DiceReducer = (state: number = initsState, action: DiceAction) => {
  switch (action.type) {
    case DICE_UPDATE:
      return action.payload.dice;
    default:
      return state;
  }
};

export default DiceReducer;
