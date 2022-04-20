import styled from 'styled-components';
import one from '../../public/image/one.jpeg';
import two from '../../public/image/two.png';
import three from '../../public/image/three.png';
import four from '../../public/image/four.png';
import five from '../../public/image/five.png';
import six from '../../public/image/six.png';
import { useEffect, useState } from 'react';
import { getRandom, getRandomNum } from '../../util/common/Random.util';

const Dice = () => {
  const [index, setIndex] = useState({
    x1: 0,
    y1: 0,
    num1: 0,
    x2: 0,
    y2: 0,
    num2: 0,
  });

  useEffect(() => {
    setIndex({
      x1: getRandom(50, 170),
      y1: getRandom(50, 448),
      num1: getRandomNum(1, 6),
      x2: getRandom(50, 170),
      y2: getRandom(50, 448),
      num2: getRandomNum(1, 6),
    });
  }, []);
  console.log(index);

  return (
    <>
      <Container x1={index.x1} y1={index.y1} num1={index.num1} x2={index.x2} y2={index.y2} num2={index.num2}>
        <Dice1>
          <div className="top" />
          <div className="left" />
          <div className="front" />
          <div className="back" />
          <div className="right" />
          <div className="bottom" />
        </Dice1>
        <Dice2>
          <div className="top" />
          <div className="left" />
          <div className="front" />
          <div className="back" />
          <div className="right" />
          <div className="bottom" />
        </Dice2>
      </Container>
    </>
  );
};

const Container = styled.div<{ x1: number; y1: number; num1: number; x2: number; y2: number; num2: number }>`
  width: 100%; // 448px
  height: 100%;

  @keyframes rotate {
    100% {
      transform: ${(props) => {
        let result = `translate(${props.x1}px, ${props.y1}px) rotateZ(70deg) `;
        switch (props.num1) {
          case 1:
            result += `rotateY(180deg) rotateX(-180deg)`;
            break;
          case 2:
            result += `rotateY(180deg) rotateX(-270deg)`;
            break;
          case 3:
            result += `rotateY(90deg) rotateX(-180deg)`;
            break;
          case 4:
            result += `rotateY(270deg) rotateX(-180deg)`;
            break;
          case 5:
            result += `rotateY(180deg) rotateX(-90deg)`;
            break;
          case 6:
            result += `rotateY(180deg) rotateX(-360deg)`;
            break;
          default:
            break;
        }
        return result;
      }};
    }
  }

  @keyframes rotate2 {
    100% {
      transform: ${(props) => {
        let result = `translate(-${props.x2}px, -${props.y2}px) rotateZ(70deg) `;
        switch (props.num2) {
          case 1:
            result += `rotateY(-180deg) rotateX(180deg)`;
            break;
          case 2:
            result += `rotateY(-180deg) rotateX(90deg)`;
            break;
          case 3:
            result += `rotateY(-270deg) rotateX(180deg)`;
            break;
          case 4:
            result += `rotateY(-90deg) rotateX(180deg)`;
            break;
          case 5:
            result += `rotateY(-180deg) rotateX(270deg)`;
            break;
          case 6:
            result += `rotateY(-180deg) rotateX(360deg)`;
            break;
          default:
            break;
        }
        return result;
      }};
    }
  }
`;

const DiceWap = styled.div`
  transform-style: preserve-3d;
  width: 60px;
  height: 60px;

  z-index: 999;

  position: absolute;

  & > div {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;

    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
  }

  & .top {
    transform: translateZ(30px);
    background-image: url('${one.src}');
  }
  & .bottom {
    transform: translateZ(-30px);
    background-image: url('${six.src}');
  }
  & .left {
    transform: translateY(-30px) rotateX(90deg);
    background-image: url('${two.src}');
  }
  & .right {
    transform: translateY(30px) rotateX(90deg);
    background-image: url('${five.src}');
  }
  & .front {
    transform: translateX(-30px) rotateY(90deg);
    background-image: url('${three.src}');
  }
  & .back {
    transform: translateX(30px) rotateY(90deg);
    background-image: url('${four.src}');
  }
`;

const Dice1 = styled(DiceWap)`
  top: 0px;
  left: 0px;

  animation: rotate 1390ms;
  animation-fill-mode: forwards;
`;

const Dice2 = styled(DiceWap)`
  bottom: 0px;
  right: 0px;

  animation: rotate2 1390ms;
  animation-fill-mode: forwards;
`;

export default Dice;
