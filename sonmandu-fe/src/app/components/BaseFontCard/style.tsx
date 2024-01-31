import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const FontCardWrapper = styled.li`
  width: 100%;
  max-width: 440px;
  max-height: 436px;
  aspect-ratio: 4 / 5.5;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${PALETTE.SUB_WHITE};
  overflow: hidden;

  &:hover {
    transition: 8px 8px;
    box-shadow: 0px 2px 2px 2px ${PALETTE.SUB_WHITE};
    transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  }
`;

export const FontCardContainer = styled.article`
  display: grid;
  height: 100%;
  padding: 16px;
  align-content: space-between;
`;

export const LatterImageArea = styled.div`
  padding-top: 64.25%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    padding-top: 59.25%;
  }

  @media (max-width: 1128px) {
    padding-top: 54.25%;
  }

  @media (max-width: 768px) {
    padding-top: 49.25%;
  }
`;

export const TextField = styled.textarea`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  background-color: inherit;

  &,
  &::placeholder {
    font-size: 12px;
  }
`;

export const FontName = styled.p`
  height: 58px;
  font-weight: ${notoSansKr.semiBold.style.fontWeight};
`;

export const EtcInfomationWrapper = styled.div`
  display: flex;
  height: 58px;

  div > div:nth-of-type(1) {
    padding-bottom: 18px;
  }
`;

export const EctInfoVerticalWrapper = styled.div``;

export const IconWithNumberWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    display: inline-block;
    height: fit-content;
  }
`;
