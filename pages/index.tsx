import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Board from '../component/layout/Board';
import { CustomDialog } from '../component/common/Dialog';
import DialogForm from '../component/layout/DialogForm';
import PlayerForm from '../component/layout/PlayerForm';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Blue-Marble</title>
    </Head>
    <PlayerForm />
    <Container>
      <CustomDialog title="플레이어 선택" width="sm">
        <DialogForm />
      </CustomDialog>
      <Board />
    </Container>
  </div>
);

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;
