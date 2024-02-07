import React from 'react';
import * as Comp from 'components';
import { useRecoilState } from 'recoil';

export default function FindInfoModal() {
  const handleFindInfoModalView = () => {
    // setFindInfoModalView((prev) => ({ ...prev, findInfo: !prev.findInfo }));
  };
  return (
    <>
      {
        <Comp.BaseModal onClose={handleFindInfoModalView} size="small">
          정보 찾기
        </Comp.BaseModal>
      }
    </>
  );
}
