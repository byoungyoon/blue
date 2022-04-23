import styled from 'styled-components';
import Dice from '../common/Dice';
import { useState } from 'react';
import AreaForm from './AreaForm';

const Board = () => {
  const [roll, setRoll] = useState(false);

  const onRoll = () => {
    setRoll(true);

    setTimeout(() => {
      setRoll(false);
    }, 3000);
  };

  return (
    <Container>
      <Box>
        <Inner>
          <InSide>
            <Dice roll={roll} />
          </InSide>
          <OutSide>
            <button type="button" onClick={onRoll}>
              test
            </button>
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

export default Board;
