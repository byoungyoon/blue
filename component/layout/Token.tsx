import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../util/store';

const Token = () => {
  const player1 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player1);
  const player2 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player2);
  const player3 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player3);
  const player4 = useSelector(({ PlayerReducer }: RootState) => PlayerReducer.player4);

  useEffect(() => {}, []);

  const onIndex = (index: number) => {};

  return <div></div>;
};

const Container = styled.div`
  position: absolute;
`;

export default Token;
