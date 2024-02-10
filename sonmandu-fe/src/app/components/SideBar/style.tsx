import styled from 'styled-components';
import { PALETTE } from 'styles';

export const SideBarWrapper = styled.div`
  position: sticky;
  top: 250px;
  left: 7rem;
  width: 76px;
  height: 168px;
  border: 1px solid ${PALETTE.MAIN_BLACK};
  border-radius: 40px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  span {
    font-size: 16px;
  }

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const LikeWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${PALETTE.MAIN_BLACK};
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${PALETTE.MAIN_BLACK};
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
`;
