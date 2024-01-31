'use client';

import React, { useState } from 'react';
import * as Comp from '@/components'


export default function CreateFontPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const OnHandleNext = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep)
  };

  const OnhandleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      console.log(currentStep)
    }
  };

  switch(currentStep) {
    case 1:
      return <Comp.FontStart onNext={ OnHandleNext }/>;
    case 2:
      return <Comp.FontFileUpload onNext={ OnHandleNext } onBack={ OnhandleBack } />;
    case 3:
      return <Comp.FontInfo onNext={ OnHandleNext } onBack={ OnhandleBack }/>;
    case 4:
      return <Comp.FontComplete onBack={ OnhandleBack }/>;
    default:
      return <div>알 수 없는 단계</div>;
  }
}