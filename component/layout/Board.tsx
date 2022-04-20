import styled from 'styled-components';
import Area from '../common/Area';

const Board = () => {
  return (
    <Container>
      <Box>
        <Inner>
          <InSide></InSide>
          <OutSide>
            <div className="leftLine">
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
            </div>

            <div className="rightLine">
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
            </div>

            <div className="topLine">
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
            </div>

            <div className="bottomLine">
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
              <div className="area">
                <Area />
              </div>
            </div>
          </OutSide>
        </Inner>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 800px;

  transform: perspective(500px) rotateX(12deg);
  auto: 0;
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
  background-color: purple;
  position: absolute;
  top: 15%;
  left: 15%;
`;

const OutSide = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }

  & .leftLine {
    position: absolute;
    top: 15%;
    left: 0%;

    & > div {
      width: 15%;
      height: 8.75%;
    }
  }

  & .rightLine {
    position: absolute;
    top: 15%;
    left: 85%;

    & > div {
      width: 15%;
      height: 8.75%;
    }
  }

  & .topLine {
    display: flex;

    position: absolute;
    top: 0%;
    left: 15%;

    & > div {
      width: 8.75%;
      height: 15%;
    }
  }

  & .bottomLine {
    display: flex;

    position: absolute;
    top: 85%;
    left: 15%;

    & > div {
      width: 8.75%;
      height: 15%;
    }
  }
`;

export default Board;
