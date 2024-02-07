'use client';

import React from 'react';
import * as Comp from '@/components';

function SungJeUiTest() {
  return (
    <>
      <Comp.LoginModal></Comp.LoginModal>
      {/* <Comp.FindIDModal></Comp.FindIDModal>
      <Comp.FindPasswordModal></Comp.FindPasswordModal> */}
      <Comp.SignUpModal></Comp.SignUpModal>
      <Comp.UnRegisterModal></Comp.UnRegisterModal>
    </>
  );
}

export default SungJeUiTest;
