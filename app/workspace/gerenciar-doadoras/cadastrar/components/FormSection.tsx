import { ReactNode } from 'react';

interface FormSectionProps {
    children: ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ children }) => {
    return <div className="space-y-8 py-4">{children}</div>;
}