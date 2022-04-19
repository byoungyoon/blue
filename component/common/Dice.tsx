import styled from 'styled-components';

const Dice = () => {
  return <div></div>;
};

const DiceWap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  perspective: 300px;
  padding: 20%;
  box-sizing: border-box;

  & .face1 {
    transform: rotateY(0deg) translateZ(60px);
    background-color: red;
  }
  & .face2 {
    transform: rotateY(90deg) translateZ(60px);
    background-color: blue;
  }
  & .face3 {
    transform: rotateY(90deg) translateZ(60px);
    background-color: green;
  }
  & .face4 {
    transform: rotateY(270deg) translateZ(60px);
    background-color: pink;
  }
  & .face5 {
    transform: rotateY(270deg) translateZ(60px);
    background-color: royalblue;
  }
  & .face6 {
    transform: rotateY(180deg) translateZ(60px);
    background-color: purple;
  }
`;

export default Dice;
