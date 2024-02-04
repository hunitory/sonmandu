import React, { Ref, forwardRef } from 'react';
import * as S from './style';
import { BaseInputProps, BaseLabelProps, BaseLabelWithInputProps } from 'types';

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
      id={id}
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
