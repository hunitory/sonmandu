import styled from 'styled-components';
import BaseHashTags from '../BaseHashTags';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';
import { BaseButtonProps } from 'types';

export const FontCardWrapper = styled.li`
  min-width: 90%;
  max-height: 200px;
  aspect-ratio: 4 / 5.5;
  background-color: white;
  border-radius: 20px;
  border: 2px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 0px 5px ${PALETTE.LIGHT_BLACK};
  &:hover {
    transform: translate(-2px, -2px);
    transition: transform 0.25s ease-in;
  }
`;

export const FontCardContainer = styled.article<{ name: string }>`
  width: 100%;
  display: grid;
  height: 100%;
  padding: 16px;
  gap: 8px;
  align-content: space-between;
  p,
  textarea {
    font-size: 30px;
    font-family: ${(props) => (props.name ? props.name : notoSansKr.bold.style.fontFamily)};
  }
`;

export const FontName = styled.p`
  height: 58px;
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
`;

export const EtcInfomationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  height: 100%;
`;

export const IconTextsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  button:nth-of-type(1) {
    cursor: default;
  }
`;

export const StyledHashTags = styled(BaseHashTags)`
  gap: 4px;
  justify-content: end;

  & > button {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const IconWithNumberContainer = styled(BaseButton)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;

  span {
    font-size: 12px;
    display: inline-block;
    height: fit-content;
  }
`;

export const SkeletonCard = styled.li`
  width: 100%;
  max-width: 440px;
  max-height: 446px;
  aspect-ratio: 4 / 5.5;
  border-radius: 20px;
  background-color: ${PALETTE.SUB_WHITE};
  border: 2px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;
  cursor: pointer;
`;
