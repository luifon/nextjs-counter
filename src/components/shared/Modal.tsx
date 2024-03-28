// components/Modal.tsx

import React from 'react';
import Button from './Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
};

const ConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50">
        <p>{children}</p>
        <div className="mt-4 flex justify-center gap-[10px]">
          <Button onClick={onClose} type="secondary" text="Cancel"></Button>
          <Button onClick={onConfirm} type="warn" text="Delete"></Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
