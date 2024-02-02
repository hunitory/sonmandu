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

  &,
  .search-font-label,
  #search-font {
    border-radius: 50px;
    transition: width 0.5s ease, padding 0.5s ease;
  }

  &,
  .search-font-label {
    display: flex;
  }

  .search-font-label {
    width: fit-content;
    justify-content: end;
    border: 1px solid ${PALETTE.SUB_WHITE};
    #search-font {
      width: 0px;
    }
  }

  &:focus-within {
    width: 50%;
    background-color: ${PALETTE.SUB_WHITE};
    border-radius: 28px 28px 0px 0px;

    .filter-list {
      visibility: visible;
    }

    ${StyledButton}, .search-font-label {
      border: 1px solid ${PALETTE.LIGHT_BLACK};
    }

    &,
    .search-font-label {
    }

    .search-font-label {
      width: calc(100% - 32px);
      background-color: white;
      #search-font {
        width: calc(100% - 32px);
        padding: 0px 12px;
      }
    }
  }
`;
