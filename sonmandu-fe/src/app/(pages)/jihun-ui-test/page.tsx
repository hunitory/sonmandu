'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';

export default function JihunUiTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달 상태

  const onClose = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div>
      {isModalOpen && (
        <Comp.Modal size="small" onClose={onClose}>
          <Comp.LoginForModal></Comp.LoginForModal>
        </Comp.Modal>
      )}
    </div>
  );
}