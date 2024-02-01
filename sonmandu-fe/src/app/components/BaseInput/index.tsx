import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  Ref,
  createContext,
  forwardRef,
  useContext,
} from 'react';
import * as S from './style';

const InputContext = createContext({
  id: '',
  type: '',
  value: '',
  onChange(e: ChangeEvent<HTMLInputElement>) {},
});

interface BaseInputWrapperProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}
function BaseInputWrapper({
  id,
  type,
  value,
  onChange,
  children,
}: BaseInputWrapperProps) {
  const valueForContext = { id, type, value, onChange };
  return (
    <InputContext.Provider value={valueForContext}>
      {children}
    </InputContext.Provider>
  );
}

interface BaseInputProps {
  className?: string;
  placeholder?: string;
}
const BaseInput = forwardRef(
  ({ className, placeholder }: BaseInputProps, ref: Ref<HTMLInputElement>) => {
    const { id, type, value, onChange } = useContext(InputContext);
    return (
      <S.DefaultStyleRemovedInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        ref={ref}
      />
    );
  },
);

interface BaseLabelProps {
  className?: string;
  children?: React.ReactNode;
}
function BaseLabel({ className, children }: BaseLabelProps) {
  const { id } = useContext(InputContext);
  return (
    <label htmlFor={id} className={className}>
      {children}
    </label>
  );
}

BaseInputWrapper.Input = BaseInput;
BaseInputWrapper.Label = BaseLabel;

export default BaseInputWrapper;
