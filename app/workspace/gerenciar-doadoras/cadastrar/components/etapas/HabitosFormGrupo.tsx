import { IFormData } from "../../page";
import { ContainerFlex } from "../ContainerFlex";
import { RadioGroup } from "../RadioGroup";

interface InputCustomProps {
    condicaoExibicao: boolean;
    label: string;
    inputId: string;
    inputName: string;
    inputValue: string;
    placeholder: string;
    errorMessage?: string;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

const InputCustom: React.FC<InputCustomProps> = ({ 
    condicaoExibicao,
    label,
    inputId,
    inputName,
    inputValue,
    placeholder,
    errorMessage,
    handleChange,
}) => {
    return (
        <ContainerFlex className={`${condicaoExibicao ? "hidden" : ""}`}>
            <p className="font-semibold mb-2">{label}</p>
            <input
                id={inputId}
                type="text"
                name={inputName}
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                className="input input-bordered mt-5 w-full"
            />
            {errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
        </ContainerFlex>
    );
};

type HabitosFormGrupoProps = {
    formData: IFormData;
    errors: Partial<Record<keyof IFormData, string>>;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};

export const HabitosFormGrupo = ({
    formData,
    errors,
    handleChange,
}: HabitosFormGrupoProps) => {
    return (
        <div>
            <RadioGroup
                name="tabagista"
                label="Tabagista?"
                options={[
                    { id: "tabagista-sim", value: "1", label: "Sim" },
                    { id: "tabagista-nao", value: "0", label: "Não" },
                ]}
                formData={formData}
                error={errors.tabagista}
                handleChange={handleChange}
            />

            <RadioGroup
                name="alcool"
                label="Consumo de álcool?"
                options={[
                    { id: "alcool-sim", value: "1", label: "Sim" },
                    { id: "alcool-nao", value: "0", label: "Não" },
                ]}
                formData={formData}
                error={errors.alcool}
                handleChange={handleChange}
            />

            <ContainerFlex>
                <RadioGroup
                    name="drogas"
                    label="Drogas ilícitas?"
                    options={[
                        { id: "drogas-sim", value: "1", label: "Sim" },
                        { id: "drogas-nao", value: "0", label: "Não" },
                    ]}
                    formData={formData}
                    error={errors.drogas}
                    handleChange={handleChange}
                />

                <InputCustom
                    condicaoExibicao={formData.drogas === "1"}
                    label="Quais drogas ilícitas foram utilizadas?"
                    inputId="drogasTexto"
                    inputName="drogasTexto"
                    inputValue={formData.drogasTexto}
                    placeholder="Se sim, qual?"
                    errorMessage={errors.drogas}
                    handleChange={handleChange}
                />
            </ContainerFlex>
        </div>
    );
}