export interface ModalProps {
    children: React.ReactNode;
    size: 'large' | 'medium' | 'small';
    onClose: () => void;
  }