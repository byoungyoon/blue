import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Board from '../component/layout/Board';
import Fixed from '../component/layout/Fixed';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Blue-Marble</title>
    </Head>
    <Container>
      <Board />
    </Container>
    <Fixed />
  </div>
);

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;
