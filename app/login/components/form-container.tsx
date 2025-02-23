import { FormEvent } from "react";

export const FormContainer = ({
    children,
    onSubmit,
  }: {
    children: React.ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  }) => (
    <form onSubmit={onSubmit} className="grid w-full">
      {children}
    </form>
  );
  