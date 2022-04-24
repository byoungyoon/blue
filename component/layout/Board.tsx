import styled from 'styled-components';
import Dice from '../common/Dice';
import { useState } from 'react';
import AreaForm from './AreaForm';
import { useDispatch } from 'react-redux';

const Board = () => {
  const [roll, setRoll] = useState(0);
  const dispatch = useDispatch();

  const onRoll = () => {
    setRoll(roll + 1);
  };

  return (
    <Container>
      <Box>
        <Inner>
          <InSide>
            <Dice roll={roll} />
            <Button onClick={onRoll}>
              <div>ROLL</div>
            </Button>
          </InSide>
          <OutSide>
            <AreaForm />
          </OutSide>
        </Inner>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 800px;

  transform: perspective(800px) rotateX(40deg);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 80%;
  height: 80%;
  transform: rotate(320deg);
  background-color: black;

  position: relative;
`;

const InSide = styled.div`
  width: 70%;
  height: 70%;
  background-color: gray;
  position: relative;
  top: 15%;
  left: 15%;
`;

const OutSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;

  width: 18%;
  height: 18%;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;

  font-weight: 700;

  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  cursor: pointer;

  & > div {
    transform: rotate(45deg);
  }
`;

export default Board;
