export interface IsActive {
  nickname: boolean;
  id: boolean;
  name: boolean;
  password: boolean;
  email: boolean;
}

export interface ProfileInputProps {
  isActive: IsActive;
  activate: React.Dispatch<React.SetStateAction<IsActive>>;
  infoContent: string;
  infoHead: string;
  labelName: string;
}
