import styled from 'styled-components';
import { PALETTE } from 'styles';

export const FontCardWrapper = styled.div`
  position: relative;
  padding-top: 126.25%;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;

  max-width: 428px;
  max-height: 538px;
  &:hover {
    transition: 8px 8px;
    box-shadow: 0px 2px 8px 0.1px ${PALETTE.SUB_WHITE};
    transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  }

  @media (max-width: 998px) {
    padding-top: 86.25%;
  }
`;

export const FontCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LatterImageArea = styled.div`
  padding-top: 74.25%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
