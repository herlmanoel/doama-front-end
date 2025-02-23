import React from "react";
import { ContainerFlex } from "./ContainerFlex";

interface InputDefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const getInputClasses = (baseClass: string, error?: string): string => {
  return `${baseClass} ${error ? "border-red-500" : ""}`;
};

const InputDefault: React.FC<InputDefaultProps> = ({
  id,
  name,
  label,
  errorMessage,
  className = "",
  ...rest
}) => {
  const inputId = id || name || "input";
  const inputName = name || id || "input";

  return (
    <ContainerFlex className={`${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={inputName}
        className={getInputClasses("input input-bordered w-full", errorMessage)}
        aria-invalid={!!errorMessage}
        aria-describedby={errorMessage ? `${inputId}-error` : undefined}
        {...rest}
      />
      {errorMessage && (
        <span id={`${inputId}-error`} className="text-sm text-red-500">
          {errorMessage}
        </span>
      )}
    </ContainerFlex>
  );
};

export default InputDefault;
