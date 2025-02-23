import React from 'react';

export const SocialLoginSection = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">
    <div className="divider">Ou fazer login com</div>
    <div className="flex items-center justify-center space-x-4">{children}</div>
  </div>
);
