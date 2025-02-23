import React from 'react';

export const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button type="submit" className="btn btn-success text-white width-button">
    {children}
  </button>
);
