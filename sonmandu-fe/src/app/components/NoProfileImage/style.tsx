import styled from 'styled-components';
import { notoSansKr } from 'styles';

export const FirstOfNickname = styled.span<{ $width: number; $height: number; $color: string; $imgIndex: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: center / contain no-repeat url(${({ $imgIndex }) => `/image/no-profile-image-user-${$imgIndex}.svg`});
  color: ${({ $color }) => $color};
  font-family: ${notoSansKr.black.style.fontFamily};
  font-weight: ${notoSansKr.black.style.fontWeight};
  border-radius: 50%;
  font-size: 1em;
`;
