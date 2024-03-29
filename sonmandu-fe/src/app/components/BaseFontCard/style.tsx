import styled from 'styled-components';
import BaseHashTags from '../BaseHashTags';
import { PALETTE, notoSansKr } from 'styles';
import { BaseButton } from 'components';

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
    transition:
      box-shadow 0.25s ease-in,
      transform 0.25s ease-in;
  }
`;

export const FontCardContainer = styled.article<{ name: string }>`
  display: grid;
  height: 100%;
  padding: 16px;
  gap: 8px;
  align-content: space-between;
  p,
  textarea {
    font-family: ${(props) => (props.name ? props.name : notoSansKr.bold.style.fontFamily)};
  }
`;

export const FontName = styled.p`
  height: 58px;
  font-size: 20px;
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
