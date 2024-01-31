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
          <p>모달 컨텐츠입니다!</p>
        </Comp.Modal>
      )}
    </div>
  );
}