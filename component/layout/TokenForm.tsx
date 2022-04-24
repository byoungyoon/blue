import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../util/store';

const TokenForm = () => {
  const player = useSelector(({ PlayerReducer }: RootState) => PlayerReducer);
  const dice = useSelector(({ DiceReducer }: RootState) => DiceReducer);
  const turn = useSelector(({ TurnReducer }: RootState) => TurnReducer);

  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    setNextIndex(player[`player${turn}`].index + dice.dice);

    console.log(player[`player${turn}`].index + dice.dice);
  }, [dice.roll]);

  const onDefault = useCallback(() => {
    return Object.keys(player).map((key, index) => <Token key={index} color={player[key].color} />);
  }, []);

  const onDice = useCallback(() => {
    const ni = player[`player${turn}`].index + dice.dice;
    setNextIndex(ni);
  }, [dice.roll]);

  const onIndex = (ni: number) => {
    switch (ni / 10) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  };

  return <>{onDefault()}</>;
};

const Container = styled.div`
  position: absolute;
`;

const Token = styled.div<{ color?: string }>`
  width: 5%;
  height: 5%;

  border-radius: 50%;
  background-color: ${(props) => props.color};

  position: absolute;
  bottom: 5%;
  right: 5%;
`;

export default TokenForm;
