'use client'

import styled from 'styled-components';
import { notoSansKr } from 'styles';

export const ProductDateWrapper = styled.div`
	width: fit-content;
    height: 32px;
    font-size: 16px;
    font-weight: ${notoSansKr.bold.style.fontWeight};;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 5px 15px;
    background-color: white;
    box-shadow: 0 4px 4px rgba(0 , 0, 0, 0.25);
`