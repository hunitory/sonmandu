export interface FontStartProps {
    onNext: () => void;
    onDownload: () => void;
  }

export interface FontFileUploadProps {
    onBack: () => void;
    /* onNext 에 파일을 인자로 해서 넘겨줘야하는 듯?*/
    onNext: () => void;
  }

export interface FontInfoProps {
    onBack: () => void;
    onNext: () => void;
  }

export interface FontStepProps {
    value: string;
    isactive: string;
  }