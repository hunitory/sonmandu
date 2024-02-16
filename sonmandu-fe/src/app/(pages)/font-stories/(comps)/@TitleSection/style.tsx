'use client';

import styled from 'styled-components';
import { BaseButton, BaseHashTags } from 'components';
import { PALETTE, notoSansKr } from 'styles';

export const PageTitleLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StoryDetailLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const LinkButtonWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  :hover {
    background-color: ${PALETTE.MAIN_ORANGE};
    color: white;
  }
`;

export const LinkButton = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(4px, 0.3vw, 10px) clamp(9px, 0.8vw, 20px);
  border: 1px solid ${PALETTE.MAIN_ORANGE};
  border-radius: 20px;
  color: ${PALETTE.MAIN_ORANGE};
  font-size: clamp(14px, 1vw, 18px);
  font-weight: ${notoSansKr.bold.style.fontWeight};
  font-family: ${notoSansKr.bold.style.fontFamily};
  span {
    font-size: 16px;
  }
`;

export const PageTitleWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    h1 {
      font-size: 28px;
      font-weight: ${notoSansKr.bold.style.fontWeight};
    }
    p {
      font-size: 14px;
      font-weight: ${notoSansKr.extraLight.style.fontWeight};
      color: ${PALETTE.LIGHT_BLACK};
    }
  }

  @media (max-width: 1024px) {
    div {
      h1 {
        font-size: 24px;
        font-weight: ${notoSansKr.bold.style.fontWeight};
      }
      p {
        font-size: 12px;
        color: ${PALETTE.LIGHT_BLACK};
      }
    }
  }

  @media (max-width: 810px) {
    align-items: center;
    flex-direction: column;
    gap: 24px;
    h1 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const FormWrapper = styled.form`
  width: 30%;
  min-width: 434px;
  height: 100%;
  label {
    margin-bottom: 24px;
  }
`;

export const HashTagsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`;

export const CustomHashTag = styled(BaseHashTags.OneTag)<{ selected: boolean }>`
  width: calc(25% - 2px);
  min-width: 104px;
  background-color: ${(props) => props.selected && PALETTE.LIGHT_ORANGE};
  border: 2px solid ${(props) => (props.selected ? PALETTE.MAIN_ORANGE : PALETTE.SUB_WHITE)};
  justify-content: center;
`;
