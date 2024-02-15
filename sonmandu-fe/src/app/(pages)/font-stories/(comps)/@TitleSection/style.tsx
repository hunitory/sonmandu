'use client';

import styled from 'styled-components';
import { BaseHashTags } from 'components';
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
  text-decoration: underline;
  padding-right: 10px;
  span {
    font-size: 16px;
    cursor: pointer;
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
  width: 376px;
  min-width: 376px;
  height: 100%;
  label {
    margin-bottom: 24px;
  }
`;

export const HashTagsWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const CustomHashTag = styled(BaseHashTags.OneTag)<{ selected: boolean }>`
  background-color: ${(props) => props.selected && PALETTE.LIGHT_ORANGE};
  border: 2px solid ${(props) => (props.selected ? PALETTE.MAIN_ORANGE : PALETTE.SUB_WHITE)};
`;
