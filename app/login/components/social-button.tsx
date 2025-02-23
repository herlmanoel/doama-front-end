import React from 'react';


export const SocialButton = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
    aria-label="Login Social"
  >
    {children}
  </button>
);
