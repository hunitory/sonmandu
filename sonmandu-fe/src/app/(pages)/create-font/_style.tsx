'use client';

import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100vw;
  /* height: calc(100vh - 56px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const MainContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1240px) {
    width: 100%;
  }
`;
