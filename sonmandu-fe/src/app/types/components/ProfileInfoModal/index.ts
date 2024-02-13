import { RefetchOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { QueryObserverResult } from 'react-query';

export interface ProfileInfoModalProps {
  clickModal: () => void;
}

export interface isActive {
  nickname: boolean;
  id: boolean;
  name: boolean;
  password: boolean;
  email: boolean;
}
