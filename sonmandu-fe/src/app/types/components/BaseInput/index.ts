import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface BaseInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  accept?: string;
  hidden?: boolean;
}

export interface BaseLabelProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
  onDragOver?: () => void;
  onDrop?: () => void;
  role?: string;
}

export interface BaseLabelWithInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
