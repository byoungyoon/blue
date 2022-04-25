import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../util/store';
import { playerUpdate } from '../../util/store/Player.reducer';
import { PlayerIndexType } from '../../types/Player.type';

const TokenForm = () => {
  const player = useSelector(({ PlayerReducer }: RootState) => PlayerReducer);
  const dice = useSelector(({ DiceReducer }: RootState) => DiceReducer);
  const turn = useSelector(({ TurnReducer }: RootState) => TurnReducer);

  const dispatch = useDispatch();

  const [nextIndex, setNextIndex] = useState<PlayerIndexType<number>>({
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
  });

  useEffect(() => {
    onDice();
  }, [dice]);

  const onDice = useCallback(() => {
    const ni = (player[`player${turn}`].index + dice.dice) % 40;

    setNextIndex({ ...nextIndex, [`player${turn}`]: ni });
    dispatch(playerUpdate(`player${turn}`, ni));
  }, [dice]);

  const onIndex = (ni: number) => {
    const edit = 5;
    const move = 70 / 9;
    const center = (70 / 9 - 5) / 2;

    const toPercent = (num: number) => {
      return `${num}%`;
    };

    switch (Math.floor(ni / 10)) {
      case 0:
        if (ni % 10 == 0) return `bottom: ${toPercent(edit)}; right: ${toPercent(edit)}`;
        return `bottom: ${toPercent(edit)}; right: ${toPercent(15 - move + move * (ni % 10) + center)}`;
        break;
      case 1:
        if (ni % 10 == 0) return `bottom: ${toPercent(edit)}; left: ${toPercent(edit)}`;
        return `bottom: ${toPercent(15 - move + move * (ni % 10) + center)}; left: ${toPercent(edit)}`;
        break;
      case 2:
        if (ni % 10 == 0) return `top: ${toPercent(edit)}; left: ${toPercent(edit)}`;
        return `top: ${toPercent(edit)}; left: ${toPercent(15 - move + move * (ni % 10) + center)}`;
        break;
      case 3:
        if (ni % 10 == 0) return `top: ${toPercent(edit)}; right: ${toPercent(edit)}`;
        return `top: ${toPercent(15 - move + move * (ni % 10) + center)}; right: ${toPercent(edit)}`;
        break;
      default:
        return `bottom: ${toPercent(edit)}; right: ${toPercent(edit)}`;
    }
  };

  return (
    <>
      {Object.keys(player).map((key, index) => (
        <Token key={index} position={onIndex(nextIndex[key])} color={player[key].color} />
      ))}
    </>
  );
};

const Token = styled.div<{ position: any; color?: string }>`
  width: 5%;
  height: 5%;

  border-radius: 50%;
  background-color: ${(props) => props.color};

  position: absolute;
  ${(props) => props.position};
`;

export default TokenForm;
