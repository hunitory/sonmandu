import styled from 'styled-components';
import BaseHashTags from '../BaseHashTags';
import { PALETTE, notoSansKr } from 'styles';

export const FontCardWrapper = styled.li`
  width: 100%;
  max-width: 440px;
  max-height: 446px;
  aspect-ratio: 4 / 5.5;
  background-color: white;
  border-radius: 20px;
  border: 2px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 0px 2px 2px 2px ${PALETTE.SUB_WHITE};
    transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  }
`;

export const FontCardContainer = styled.article`
  display: grid;
  height: 100%;
  padding: 16px;
  gap: 8px;
  align-content: space-between;
`;

export const FontName = styled.p`
  height: 58px;
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
`;

export const EtcInfomationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const EctInfoVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

export const StyledHashTags = styled(BaseHashTags)`
  gap: 4px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const IconWithNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 92px;

  span {
    font-size: 12px;
    display: inline-block;
    height: fit-content;
  }
`;
