import { BaseButton, BaseLabelWithInput } from 'components';
import styled from 'styled-components';
import { PALETTE } from 'styles';

export const StyledButton = styled(BaseButton)<{ bgColor: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  justify-content: center;
  border: 1px solid ${PALETTE.SUB_WHITE};

  &:focus {
    outline: none;
  }
`;

export const CustomLabel = styled(BaseLabelWithInput.Label)<{
  flexible: { able: false; width: string } | { able: true };
}>`
  display: flex;
  width: ${({ flexible }) => (flexible.able ? 'fit-content' : `calc(${flexible.width})`)};
  justify-content: end;
  border: 1px solid ${PALETTE.SUB_WHITE};

  &,
  input {
    border-radius: 50px;
    transition: width 0.5s ease, padding 0.5s ease;
  }
  input {
    width: ${({ flexible }) => (flexible.able ? '0px' : 'calc(100% - 32px)')};
    padding: ${({ flexible }) => (flexible.able ? '0px' : '0px 12px')};
  }

  &:focus-within {
    width: ${({ flexible }) => (flexible.able ? 'calc(100% - 32px)' : `calc(${flexible.width})`)};
    background-color: white;
    ${StyledButton} {
      border: 1px solid ${PALETTE.LIGHT_BLACK};
    }
    input {
      width: ${({ flexible }) => (flexible.able ? 'calc(100% - 32px)' : 'calc(100% - 32px)')};
      padding: 0px 12px;
    }
  }
`;
