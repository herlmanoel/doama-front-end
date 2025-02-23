import { IFormData } from "../page";
import { ContainerFlex } from "./ContainerFlex";

interface RadioGroupProps {
    name: keyof IFormData;
    label: string;
    options: { id: string; value: string; label: string }[];
    formData: IFormData;
    error?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    name,
    label,
    options,
    formData,
    error,
    handleChange,
}) => {
    return (
        <ContainerFlex>
            <p className="font-semibold mb-2">{label}</p>
            <div className="flex mt-3 space-x-14">
                {options.map((option) => (
                    <div key={option.id} className="flex items-center">
                        <input
                            type="radio"
                            id={option.id}
                            name={name}
                            value={option.value}
                            checked={formData[name] === option.value}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor={option.id} className="ml-2 cursor-pointer">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </ContainerFlex>
    );
};