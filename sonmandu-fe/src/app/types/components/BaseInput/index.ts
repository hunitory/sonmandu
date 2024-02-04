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
  onDragEnter?: (...args: any[]) => void;
  onDragLeave?: (...args: any[]) => void;
  onDragOver?: (...args: any[]) => void;
  onDrop?: (...args: any[]) => void;
  role?: string;
}

export interface BaseLabelWithInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
