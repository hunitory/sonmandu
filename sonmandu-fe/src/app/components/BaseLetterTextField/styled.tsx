import styled from 'styled-components';

export const LetterImageArea = styled.div`
  padding-top: 64.25%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
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
