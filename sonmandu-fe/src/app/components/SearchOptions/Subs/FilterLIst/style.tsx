import { BaseHashTags } from 'components';
import styled from 'styled-components';
import { PALETTE, notoSansKr } from 'styles';

export const FilterListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 8px 12px;
  height: fit-content;
  position: absolute;
  top: 42px;
  left: 0px;
  visibility: hidden;
  background-color: ${PALETTE.SUB_WHITE};
  border-radius: 0px 0px 28px 28px;
  z-index: 1;
  gap: 4px;

  max-height: 466px;
  overflow: hidden;

  span {
    display: block;
    width: 100%;
    padding: 12px 0px 4px 0px;
    color: ${PALETTE.MAIN_BLACK};
    border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
    font-weight: ${notoSansKr.bold.style.fontWeight};
  }
`;

export const FilterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 8px;
  height: fit-content;
`;

export const CustomHashTag = styled(BaseHashTags.OneTag)<{ selected: boolean }>`
  background-color: ${(props) => props.selected && PALETTE.LIGHT_ORANGE};
  border: 2px solid ${(props) => (props.selected ? PALETTE.MAIN_ORANGE : PALETTE.SUB_WHITE)};
`;
