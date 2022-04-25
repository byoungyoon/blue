import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../util/store';
import { playerUpdate } from '../../util/store/Player.reducer';
import { PlayerIndexType } from '../../types/Player.type';
import { turnUpdate } from '../../util/store/Turn.reducer';

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

    if (ni === 0) return;

    setNextIndex({ ...nextIndex, [`player${turn}`]: ni });
    dispatch(playerUpdate(`player${turn}`, ni));

    let nextTurn = turn + 1 > 4 ? 1 : turn + 1;
    while (!player[`player${nextTurn}`].status) {
      nextTurn = nextTurn + 1 > 4 ? 1 : nextTurn + 1;
    }

    dispatch(turnUpdate(nextTurn));
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
      {Object.keys(player).map(
        (key, index) =>
          player[key].status && (
            <Token key={index} position={onIndex(nextIndex[key])}>
              <TokenWap color={player[key].color}>
                <div className="top" />
                <div className="left" />
                <div className="front" />
                <div className="back" />
                <div className="right" />
                <div className="bottom" />
              </TokenWap>
            </Token>
          ),
      )}
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

const TokenWap = styled.div<{ color?: string }>`
  transform-style: preserve-3d;
  transform: rotateX(20deg) rotateY(20deg) translateZ(2px);

  width: 100%;
  height: 100%;

  z-index: 999;
  position: relative;

  & > div {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: ${(props) => props.color};
    border: 1px solid black;
    opacity: 0.9;
  }

  & .top {
    transform: translateZ(17px);
  }
  & .bottom {
  }
  & .left {
    transform: translateY(-50%) rotateX(90deg);
  }
  & .right {
    transform: translateY(50%) rotateX(90deg);
  }
  & .front {
    transform: translateX(-50%) rotateY(90deg);
  }
  & .back {
    transform: translateX(50%) rotateY(90deg);
  }
`;

export default TokenForm;
