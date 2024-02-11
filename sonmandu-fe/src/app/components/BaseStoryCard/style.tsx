import styled from 'styled-components';
import ProfileBox from '../ProfileBox';
import { PALETTE, notoSansKr } from 'styles';

export const StoryCardWrapper = styled.li`
  display: grid;
  align-content: space-between;
  grid-template-rows: 60% 1fr;

  width: 100%;
  max-width: 440px;
  max-height: 446px;
  aspect-ratio: 4 / 12;
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

export const StoryCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const ImageArea = styled.div`
  padding-top: 64.25%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const StoryTextContentWrapper = styled.div`
  p {
    color: ${PALETTE.LIGHT_BLACK};
  }
  h3 {
    height: fit-content;
    font-weight: ${notoSansKr.semiBold.style.fontWeight};
  }
`;

export const InteractionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .profile-box-wrapper {
    width: 120px;
    height: 48px;
  }
`;

export const StyledProfileBox = styled(ProfileBox)`
  flex-direction: row;
  img {
    border: 1px solid ${PALETTE.LIGHT_BLACK};
  }
`;

export const IconWithNumberWrapper = styled.div`
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
