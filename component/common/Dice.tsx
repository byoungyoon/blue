import styled, { keyframes } from 'styled-components';
import one from '../../public/image/one.jpeg';
import two from '../../public/image/two.png';
import three from '../../public/image/three.png';
import four from '../../public/image/four.png';
import five from '../../public/image/five.png';
import six from '../../public/image/six.png';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getRandom, getRandomNum } from '../../util/common/Random.util';
import { DiceProps, DiceType, RollType } from '../../types/Dice.type';
import { useDispatch } from 'react-redux';
import { diceUpdate } from '../../util/store/Dice.reducer';

const onKeyFrames = (reverse: number = 1) => {
  let result: DiceType = {
    tx: 0,
    ty: 0,
    rx: 0,
    ry: 0,
    num: 0,
  };

  const random = {
    x: getRandom(50, 170),
    y: getRandom(50, 400),
    num: getRandomNum(1, 6),
  };

  result = { ...result, tx: random.x * reverse, ty: random.y * reverse, num: random.num };

  const standard = 180 * reverse;
  switch (random.num) {
    case 1:
      result = { ...result, rx: standard * -1, ry: standard };
      break;
    case 2:
      result = { ...result, rx: (standard - 90) * -1, ry: standard };
      break;
    case 3:
      result = { ...result, rx: standard * -1, ry: standard + 90 };
      break;
    case 4:
      result = { ...result, rx: standard * -1, ry: standard - 90 };
      break;
    case 5:
      result = { ...result, rx: (standard + 90) * -1, ry: standard };
      break;
    case 6:
      result = { ...result, rx: standard * 2 * -1, ry: standard };
      break;
    default:
      break;
  }

  return result;
};

const Dice = ({ roll }: DiceProps) => {
  const [index, setIndex] = useState({
    dice1: { tx: 0, ty: 0, rx: 0, ry: 0, num: 0 },
    dice2: { tx: 0, ty: 0, rx: 0, ry: 0, num: 0 },
  } as RollType);

  const [rollAction, setRollAction] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const dice = {
      dice1: onKeyFrames(),
      dice2: onKeyFrames(-1),
    };

    setIndex(dice);

    if (roll !== 0) {
      onDiceUpdate(dice.dice1.num, dice.dice2.num);
    }
  }, [roll]);

  const onDiceUpdate = (num1: number, num2: number) => {
    setRollAction(true);
    dispatch(diceUpdate(num1 + num2));

    setTimeout(() => {
      setRollAction(false);
    }, 3000);
  };

  return (
    <>
      {rollAction && (
        <Container>
          <Dice1 index={index.dice1}>
            <div className="top" />
            <div className="left" />
            <div className="front" />
            <div className="back" />
            <div className="right" />
            <div className="bottom" />
          </Dice1>
          <Dice2 index={index.dice2}>
            <div className="top" />
            <div className="left" />
            <div className="front" />
            <div className="back" />
            <div className="right" />
            <div className="bottom" />
          </Dice2>
        </Container>
      )}
    </>
  );
};

const rotate = ({ tx, ty, rx, ry }: DiceType) => keyframes`
  100% {
    transform: translate(${tx}px, ${ty}px) rotateZ(70deg) rotateX(${rx}deg) rotateY(${ry}deg);
  }
`;

const Container = styled.div`
  width: 100%; // 448px
  height: 100%;
`;

const DiceWap = styled.div<{ index: DiceType }>`
  transform-style: preserve-3d;
  animation: ${(props) => rotate(props.index)} 1390ms forwards;
  width: 60px;
  height: 60px;

  z-index: 999;
  position: absolute;

  & > div {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
  }

  & .top {
    transform: rotateX(-10deg) translateZ(30px);
    background-image: url('${one.src}');
  }
  & .bottom {
    transform: rotateX(-10deg) translateZ(-30px);
    background-image: url('${six.src}');
  }
  & .left {
    transform: rotateX(-10deg) translateY(-30px) rotateX(90deg);
    background-image: url('${two.src}');
  }
  & .right {
    transform: rotateX(-10deg) translateY(30px) rotateX(90deg);
    background-image: url('${five.src}');
  }
  & .front {
    transform: rotateX(-10deg) translateX(-30px) rotateY(90deg);
    background-image: url('${three.src}');
  }
  & .back {
    transform: rotateX(-10deg) translateX(30px) rotateY(90deg);
    background-image: url('${four.src}');
  }
`;

const Dice1 = styled(DiceWap)`
  top: 0;
  left: 0;
`;

const Dice2 = styled(DiceWap)`
  bottom: 0;
  right: 0;
`;

export default Dice;
