import styled from 'styled-components';
import { BaseButton } from 'components';
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

export const SearchOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: end;
  position: relative;
`;

export const UserInteractionWrapper = styled.form`
  width: calc(42px * 2);
  max-width: 396px;
  height: fit-content;
  border: 1px solid ${PALETTE.SUB_WHITE};
  background-color: white;
  border-radius: 50px;
  padding: 8px;
  position: relative;

  & {
    border-radius: 50px;
    transition:
      width 0.5s ease,
      padding 0.5s ease;
  }

  & {
    display: flex;
  }

  &:focus-within {
    width: 50%;
    background-color: ${PALETTE.SUB_WHITE};
    border-radius: 28px 28px 0px 0px;

    .filter-list {
      visibility: visible;
    }

    ${StyledButton} {
      border: 1px solid ${PALETTE.LIGHT_BLACK};
    }
  }
`;
