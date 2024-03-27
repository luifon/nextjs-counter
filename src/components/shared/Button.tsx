// components/Button.tsx

import React from 'react';

type ButtonProps = {
  onClick: () => void;
  color: string;
  hoverColor: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  color,
  hoverColor,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${hoverColor}-600 text-white px-3 py-1 rounded-md border border-${color}-500`}
    >
      {text}
    </button>
  );
};

export default Button;
