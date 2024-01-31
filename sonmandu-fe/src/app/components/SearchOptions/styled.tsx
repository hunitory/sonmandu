import { BaseButton } from 'components';
import styled from 'styled-components';
import { PALETTE } from 'styles';

export const UserInteractionWrapper = styled.div`
  width: calc(36px * 2);
  height: 40px;
  border: 1px solid ${PALETTE.SUB_WHITE};
  /* background-color: ${PALETTE.SUB_WHITE}; */
  background-color: white;
  box-shadow: 0px 0px 8px 1px ${PALETTE.SUB_WHITE};
  border-radius: 50px;
  padding: 4px;
  display: flex;
`;

export const StyledButton = styled(BaseButton)<{ bgColor: string }>`
  width: 50%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  justify-content: center;
`;
