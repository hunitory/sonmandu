import { isActive } from 'types';

export interface ProfilePasswordInputProps {
  isActive: isActive;
  activate: React.Dispatch<React.SetStateAction<isActive>>;
  password?: string;
}
