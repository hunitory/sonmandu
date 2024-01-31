import { PALETTE, notoSansKr } from 'styles';
import BaseButton from '../../BaseButton';
import styled from 'styled-components'

export const Button = styled(BaseButton)`
    width: 240px;
    height: 48px;
    background-color: ${PALETTE.MAIN_ORANGE};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.p`
    font-weight: ${notoSansKr.bold.style.fontWeight};
    font-size: 20px;
    color: ${PALETTE.SUB_WHITE}
`