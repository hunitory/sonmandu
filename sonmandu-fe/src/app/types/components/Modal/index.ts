export interface BaseModalProps {
    children: React.ReactNode;
    size: 'large' | 'medium' | 'small';
    onClose: () => void;
  }