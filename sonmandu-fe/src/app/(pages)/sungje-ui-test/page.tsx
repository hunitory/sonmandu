'use client';

import React from 'react';
import * as Comp from '@/components';
import { PALETTE } from 'styles';

function SungJeUiTest() {
  const handleButtonClick = () => {
    console.log(`hihihihihi :`);
  };

  return (
    <>
      <Comp.BaseHeader></Comp.BaseHeader>
      <Comp.BaseButton
        $bgColor={PALETTE.MAIN_ORANGE}
        onClick={handleButtonClick}
        $disable={0 > 1}
      >
        <p>hi</p>
        <p>hi</p>
      </Comp.BaseButton>
    </>
  );
}

export default SungJeUiTest;
