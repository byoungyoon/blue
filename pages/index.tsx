import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Board from '../component/layout/Board';
import { CustomDialog } from '../component/common/Dialog';
import DialogForm from '../component/layout/DialogForm';
import Player from '../component/common/Player';
import { useSelector } from 'react-redux';
import { PlayerType } from '../types/Player.type';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Blue-Marble</title>
        </Head>
        <Fix>
          <div className="play1">
            <Player />
          </div>
          <div className="play2">
            <Player />
          </div>
          <div className="play3">
            <Player />
          </div>
          <div className="play4">
            <Player />
          </div>
        </Fix>
        <Container>
          <CustomDialog title="플레이어 선택" width="sm">
            <DialogForm />
          </CustomDialog>
          <Board />
        </Container>
      </div>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

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
