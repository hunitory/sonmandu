'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';

export default function CreateFontPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const OnHandleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const OnhandleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  /* 다운로드 링크 주기 */
  const OnDownload = () => {
    console.log('다운로드했음');
  };

  switch (currentStep) {
    case 1:
      return <Comp.FontStart onNext={OnHandleNext} onDownload={OnDownload} />;
    case 2:
      return (
        <Comp.FontFileUpload onNext={OnHandleNext} onBack={OnhandleBack} />
      );

    case 3:
      return <Comp.FontInfo onNext={OnHandleNext} onBack={OnhandleBack} />;
    case 4:
      return <Comp.FontComplete />;
    default:
      return <div>알 수 없는 단계</div>;
  }
}
