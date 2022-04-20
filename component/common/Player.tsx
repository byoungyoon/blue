import styled from 'styled-components';
import PaidIcon from '@mui/icons-material/Paid';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';

interface PlayerProps {
  position: string;
  color: string;
  name: string;
  point: number;
  status: boolean;
}

const Player = ({ position, color, name, point, status }: PlayerProps) => {
  return (
    <>
      <Main>
        <Name position={position} color={color}>
          {name}
        </Name>
        <Point position={position}>
          {position === 'left' ? (
            <>
              <div className="coin">
                <PaidIcon fontSize="large" />
              </div>
              <div className="point">{point} 만원</div>
            </>
          ) : (
            <>
              <div className="point">{point} 만원</div>
              <div className="coin">
                <PaidIcon fontSize="large" />
              </div>
            </>
          )}
        </Point>
      </Main>
      <Score position={position}>
        4<span>위</span>
      </Score>
      <Fail status={status}>
        <CloseIcon sx={{ color: pink[500], fontSize: 250 }} />
      </Fail>
    </>
  );
};

const Main = styled.div`
  width: 400px;
  height: 130px;
  border-radius: 20px;

  background-color: #404040;

  position: relative;
`;

const Name = styled.div<{ position: string; color: string }>`
  width: 230px;
  height: 60px;

  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  ${(props) => {
    return props.position === 'left'
      ? { left: 15, paddingLeft: '15px' }
      : { right: 15, justifyContent: 'end', paddingRight: '15px' };
  }};

  transform: translateY(-15px);

  border-radius: 20px;
  background-color: ${(props) => props.color};
  border: 3px solid rgba(64, 64, 64, 0.7);
  box-shadow: 0 0 0 7px #464d59 inset;

  font-weight: 500;
  color: #fff;
  font-size: 18px;
`;

const Point = styled.div<{ position: string }>`
  display: flex;

  position: absolute;
  bottom: 7px;

  ${(props) => {
    return props.position === 'left' ? { left: 0 } : { right: 0 };
  }};

  & .coin {
    width: 90px;
    height: 50px;

    display: flex;
    align-items: center;

    background-color: #fff;
    ${(props) => {
      return props.position === 'left'
        ? { borderRadius: '0 15px 15px 10px', paddingRight: '20px', marginRight: '30px', justifyContent: 'end' }
        : {
            right: 0,
            borderRadius: '15px 0 10px 15px',
            paddingLeft: '20px',
            marginLeft: '30px',
            justifyContent: 'start',
          };
    }};
  }

  & .point {
    font-size: 35px;
    font-weight: 500;
    color: #fff;
  }
`;

const Score = styled.div<{ position: string }>`
  width: 130px;
  height: 130px;
  border-radius: 65px;

  border: 3px solid rgba(64, 64, 64, 0.7);
  box-shadow: 0 0 0 9px #464d59 inset;
  background-color: #fff;

  position: absolute;
  top: 0;
  ${(props) => {
    return props.position === 'left'
      ? { right: 0, transform: 'translateX(65px)' }
      : { left: 0, transform: 'translateX(-65px)' };
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 60px;
  color: #404040;
  & span {
    font-size: 20px;
    margin: 1em 0 0 3px;
  }
`;

const Fail = styled.div<{ status: boolean }>`
  ${(props) => props.status && { display: 'none' }}

  position: absolute;
  top: -50%;
  left: 30%;
`;

export default Player;
