import { Ref } from 'react';

export interface BaseButtonProps {
  ref?: Ref<HTMLButtonElement>;
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
  onClick?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  disabled: boolean;
  className?: string;
}
