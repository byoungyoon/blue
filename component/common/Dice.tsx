import styled from 'styled-components';

const Dice = () => {
  return (
    <Container>
      <DiceWap>
        <div className="top">1</div>
        <div className="left">2</div>
        <div className="front">3</div>
        <div className="back">4</div>
        <div className="right">5</div>
        <div className="bottom">6</div>
      </DiceWap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20%;

  @keyframes rotate {
    100% {
      transform: rotateY(360deg) rotateX(720deg) rotateZ(1080deg);
    }
  }
`;

const DiceWap = styled.div`
  animation: rotate 7000ms linear infinite;
  transform-style: preserve-3d;
  width: 60px;
  height: 60px;

  & > div {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;

    opacity: 0.8;
    border: 2px solid black;
    border-radius: 10px;
  }

  & .top {
    transform: translateZ(30px);
    background-color: #fff;
  }
  & .bottom {
    transform: translateZ(-30px);
    background-color: #fff;
  }
  & .left {
    transform: translateY(-30px) rotateX(90deg);
    background-color: #fff;
  }
  & .right {
    transform: translateY(30px) rotateX(90deg);
    background-color: #fff;
  }
  & .front {
    transform: translateX(-30px) rotateY(90deg);
    background-color: #fff;
  }
  & .back {
    transform: translateX(30px) rotateY(90deg);
    background-color: #fff;
  }
`;

export default Dice;
