import { IFormData } from "../../page";
import TelefoneInput from "../TelefoneInput";

type DadosPessoaisFormGrupoProps = {
    formData: IFormData;
    errors: Partial<Record<keyof IFormData, string>>;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    validateField: (name: keyof IFormData, value: string) => string;
    setErrors: React.Dispatch<
        React.SetStateAction<Partial<Record<keyof IFormData, string>>>
    >;
    setGlobalFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    tipo: "text" | "date";
    toggleTipo: () => void;
};

export const DadosPessoaisFormGrupo = ({
    formData,
    errors,
    handleChange,
    validateField,
    setErrors,
    setGlobalFormData,
    tipo,
    toggleTipo,
}: DadosPessoaisFormGrupoProps) => {
    return (
        <div>
            {/* Nome */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="nome" className="font-semibold mb-2">
                    Nome completo
                </label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome completo"
                    className="input input-bordered w-full"
                />
                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>

            {/* Data de nascimento */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="dataNascimento" className="font-semibold mb-2">
                    Data de Nascimento
                </label>
                <input
                    id="dataNascimento"
                    type={tipo}
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    onBlur={toggleTipo}
                    onFocus={toggleTipo}
                    placeholder="Data de Nascimento"
                    className="input input-bordered w-full text-gray-400"
                />
                {errors.dataNascimento && (
                    <p className="text-red-500 text-sm mt-1">{errors.dataNascimento}</p>
                )}
            </div>

            {/* Endereço */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="endereco" className="font-semibold mb-2">
                    Endereço
                </label>
                <input
                    id="endereco"
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Endereço"
                    className="input input-bordered w-full"
                />
                {errors.endereco && (
                    <p className="text-red-500 text-sm mt-1">{errors.endereco}</p>
                )}
            </div>

            {/* Cidade / UF */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="cidade" className="font-semibold mb-2">
                    Cidade / UF
                </label>
                <input
                    id="cidade"
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Cidade / UF"
                    className="input input-bordered w-full"
                />
                {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
            </div>

            {/* Bairro */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="bairro" className="font-semibold mb-2">
                    Bairro
                </label>
                <input
                    id="bairro"
                    type="text"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    placeholder="Bairro"
                    className="input input-bordered w-full"
                />
                {errors.bairro && <p className="text-red-500 text-sm mt-1">{errors.bairro}</p>}
            </div>

            {/* Ponto de referência */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="pontoReferencia" className="font-semibold mb-2">
                    Ponto de referência
                </label>
                <input
                    id="pontoReferencia"
                    type="text"
                    name="pontoReferencia"
                    value={formData.pontoReferencia}
                    onChange={handleChange}
                    placeholder="Ponto de referência"
                    className="input input-bordered w-full"
                />
                {errors.pontoReferencia && (
                    <p className="text-red-500 text-sm mt-1">{errors.pontoReferencia}</p>
                )}
            </div>

            {/* Telefone fixo e celular */}
            <div className="flex justify-between w-full mt-5">
                <TelefoneInput
                    tipoTelefone="fixo"
                    phoneNumber={formData.telefoneFixo}
                    setPhoneNumber={(numero) => {
                        // Validação quando altera Telefone Fixo
                        const errorMsg = validateField("telefoneFixo", numero);
                        setErrors((prev) => ({
                            ...prev,
                            telefoneFixo: errorMsg || undefined,
                        }));
                        setGlobalFormData((prev) => ({ ...prev, telefoneFixo: numero }));
                    }}
                />
                <TelefoneInput
                    tipoTelefone="celular"
                    phoneNumber={formData.celular}
                    setPhoneNumber={(numero) => {
                        // Validação quando altera Telefone Celular
                        const errorMsg = validateField("celular", numero);
                        setErrors((prev) => ({
                            ...prev,
                            celular: errorMsg || undefined,
                        }));
                        setGlobalFormData((prev) => ({ ...prev, celular: numero }));
                    }}
                />
            </div>
            {errors.telefoneFixo && (
                <p className="text-red-500 text-sm mt-1">{errors.telefoneFixo}</p>
            )}
            {errors.celular && (
                <p className="text-red-500 text-sm mt-1">{errors.celular}</p>
            )}

            {/* Profissão */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="profissao" className="font-semibold mb-2">
                    Profissão
                </label>
                <input
                    id="profissao"
                    type="text"
                    name="profissao"
                    value={formData.profissao}
                    onChange={handleChange}
                    placeholder="Profissão"
                    className="input input-bordered w-full"
                />
                {errors.profissao && (
                    <p className="text-red-500 text-sm mt-1">{errors.profissao}</p>
                )}
            </div>
        </div>
    );
}