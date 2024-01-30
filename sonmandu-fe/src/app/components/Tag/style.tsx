'use client'

import styled from 'styled-components';
import { PALETTE } from 'styles';

export const TagWrapper = styled.div`
    width: fit-content;
    height: 30px;
    border-radius: 24px;
    border: 1px solid ${PALETTE.SUB_WHITE};
`

export const TagSpan = styled.span`
    font-size: 12px;
`
