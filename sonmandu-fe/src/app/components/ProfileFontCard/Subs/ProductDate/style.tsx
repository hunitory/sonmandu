'use client'

import styled from 'styled-components';
import { notoSansKr } from 'styles';

export const ProductDateWrapper = styled.div`
	width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: ${notoSansKr.bold.style.fontWeight};
    background-color: white;
    box-shadow: 0 4px 4px rgba(0 , 0, 0, 0.25);
`