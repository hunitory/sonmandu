import styled from 'styled-components';
import { PALETTE } from 'styles';

export const SideBarWrapper = styled.div`
  position: sticky;
  top: 140px;
  width: 64px;
  height: 150px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  border-radius: 40px;
  padding: 4px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  span {
    font-size: 14px;
  }

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const LikeWrapper = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const LikeDiv = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid ${PALETTE.LIGHT_BLACK};
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  cursor: pointer;
`;
