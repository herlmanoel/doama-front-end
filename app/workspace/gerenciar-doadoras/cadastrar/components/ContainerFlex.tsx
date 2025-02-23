import React from "react";

interface ContainerFlexProps {
  className?: string;
  children: React.ReactNode;
}

export const ContainerFlex: React.FC<ContainerFlexProps> = ({ className = "", children }) => {
  return <div className={`flex flex-col mt-6 ${className}`}>{children}</div>;
};
