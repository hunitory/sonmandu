import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  Ref,
  forwardRef,
} from 'react';
import * as S from './style';

interface BaseInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  accept?: string;
  hidden?: boolean;
}
const BaseInput = forwardRef(
  (
    {
      id,
      type,
      value,
      onChange,
      className,
      placeholder,
      accept,
      hidden,
    }: BaseInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <S.DefaultStyleRemovedInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        aria-hidden={hidden ? true : false}
        accept={accept}
        ref={ref}
      />
    );
  },
);

interface BaseLabelProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
  onDragOver?: () => void;
  onDrop?: () => void;
  role?: string;
}
function BaseLabel({
  id,
  className,
  children,
  role,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}: BaseLabelProps) {
  return (
    <label
      htmlFor={id}
      className={className}
      role={role}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </label>
  );
}

interface BaseLabelWithInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
function BaseLabelWithInput(props: BaseLabelWithInputProps) {
  const { id, type, value, onChange, children } = props;
  return (
    <BaseLabel id={id}>
      {children}
      <BaseInput id={id} type={type} value={value} onChange={onChange} />
    </BaseLabel>
  );
}

BaseLabelWithInput.Input = BaseInput;
BaseLabelWithInput.Label = BaseLabel;

export default BaseLabelWithInput;
