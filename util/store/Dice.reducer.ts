import { DiceStateType } from '../../types/Dice.type';

const DICE_UPDATE = 'dice/update' as const;

export const diceUpdate = (dice: number, roll: number) => ({
  type: DICE_UPDATE,
  payload: {
    dice: dice,
    roll: roll,
  },
});

type DiceAction = ReturnType<typeof diceUpdate>;

const initsState: DiceStateType = {
  dice: 0,
  roll: 0,
};

const DiceReducer = (state: DiceStateType = initsState, action: DiceAction) => {
  switch (action.type) {
    case DICE_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default DiceReducer;
