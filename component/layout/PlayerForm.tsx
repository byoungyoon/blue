import Player from '../common/Player';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../util/store';

const PlayerForm = () => {
  const player1 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player1);
  const player2 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player2);
  const player3 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player3);
  const player4 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player4);

  return (
    <Fix>
      <div className="play1">
        <Player position="left" color="red" name={player1.name} point={player1.point} status={player1.status} />
      </div>
      <div className="play2">
        <Player position="right" color="skyblue" name={player2.name} point={player2.point} status={player2.status} />
      </div>
      <div className="play3">
        <Player position="left" color="purple" name={player3.name} point={player3.point} status={player3.status} />
      </div>
      <div className="play4">
        <Player position="right" color="pink" name={player4.name} point={player4.point} status={player4.status} />
      </div>
    </Fix>
  );
};

const Fix = styled.div`
  & > div {
    position: fixed;
  }

  & .play1 {
    top: 20px;
    left: 20px;
  }
  & .play2 {
    top: 20px;
    right: 20px;
  }
  & .play3 {
    bottom: 20px;
    left: 20px;
  }
  & .play4 {
    bottom: 20px;
    right: 20px;
  }
`;

export default PlayerForm;
