import styled from 'styled-components';
import { BaseLabelWithInput } from 'components';
import { PALETTE } from 'styles';

export const UserInputContainer = styled.div<{ $isValueOnInput: boolean }>`
  width: 100%;
  height: 42px;
  position: relative;
  transition: border-bottom 0.5s ease;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-bottom: 6px;

  ${({ $isValueOnInput }) => {
    return (
      $isValueOnInput &&
      `border-bottom: 1px solid ${PALETTE.MAIN_ORANGE};
        label {
            top: 0px;
            left: 0;
            color: ${PALETTE.MAIN_ORANGE};
        }`
    );
  }}

  &:focus-within {
    border-bottom: 1px solid ${PALETTE.MAIN_ORANGE};
    label {
      top: 0px;
      left: 0;
      color: ${PALETTE.MAIN_ORANGE};
    }
  }
`;

export const PlaceholderLabel = styled(BaseLabelWithInput.Label)`
  position: absolute;
  top: 14px;
  left: 12px;
  transition: top 0.3s ease, left 0.3s ease;
  color: ${PALETTE.LIGHT_BLACK};
  cursor: inherit;
  font-size: 12px;
`;

export const CustomInput = styled(BaseLabelWithInput.Input)`
  width: 70%;
  min-width: 368px;
  height: 16px;
  padding-left: 12px;
  @media (max-width: 768px) {
    min-width: 0px;
  }
`;
