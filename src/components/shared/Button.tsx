// components/Button.tsx

import React from 'react';

type ButtonProps = {
  onClick: (e: React.FormEvent) => void;
  type: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, type, text }) => {
  return (
    <button onClick={onClick} className={`button-${type}`}>
      {text}
    </button>
  );
};

export default Button;
