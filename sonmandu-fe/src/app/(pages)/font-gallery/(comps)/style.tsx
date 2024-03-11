'use client';

import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100vw;
  height: calc(100% - 72px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px 0px;
  overflow-y: scroll;
`;

export const MainContainer = styled.div`
  width: 80%;
  height: fit-content;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;
