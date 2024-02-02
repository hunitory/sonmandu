'use client';

import styled from 'styled-components';

export const TestingWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding-top: 36px;
  border: 1px solid red;
`;

export const TestingLatterArea = styled.article`
  width: calc(60% - 8px);
`;

export const SideBoxWrapper = styled.aside`
  width: calc(40% - 8px);
  height: 100px;
  background-color: brown;
`;
