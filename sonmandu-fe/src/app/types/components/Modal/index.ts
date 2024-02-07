export interface BaseModalProps {
  children: React.ReactNode;
  size: 'large' | 'medium' | 'small';
  onClose: () => void;
}

export interface FindInfoPasswordValueBasket {
  id: string;
  name: string;
  email: string;
  [key: string]: string;
}

export interface FindInfoIdValueBasket {
  name: string;
  email: string;
  [key: string]: string;
}

export interface LoginValueBasket {
  id: string;
  password: string;
  [key: string]: string;
}

export interface SignUpValueBasket {
  id: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
  [key: string]: string;
}
