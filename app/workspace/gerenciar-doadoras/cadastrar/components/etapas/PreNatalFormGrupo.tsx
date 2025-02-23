import { IFormData } from "../../page";

export type PreNatalFormGrupoProps = {
    formData: IFormData;
    errors: Partial<Record<keyof IFormData, string>>;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    tipo: "text" | "date";
    toggleTipo: () => void;
};

export const PreNatalFormGrupo = ({
    formData,
    errors,
    handleChange,
    tipo,
    toggleTipo,
}: {
    formData: IFormData;
    errors: Partial<Record<keyof IFormData, string>>;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    tipo: "text" | "date";
    toggleTipo: () => void;
}) => {
    return (
        <div>
            {/* Pré-natal */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="preNatal" className="font-semibold mb-2">
                    Local do pré-natal
                </label>
                <input
                    id="preNatal"
                    type="text"
                    name="preNatal"
                    value={formData.preNatal}
                    onChange={handleChange}
                    placeholder="Local do pré-natal"
                    className="input input-bordered w-full"
                />
                {errors.preNatal && (
                    <p className="text-red-500 text-sm mt-1">{errors.preNatal}</p>
                )}
            </div>

            {/* Médico */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="medico" className="font-semibold mb-2">
                    Nome do médico
                </label>
                <input
                    id="medico"
                    type="text"
                    name="medico"
                    value={formData.medico}
                    onChange={handleChange}
                    placeholder="Nome do médico"
                    className="input input-bordered w-full"
                />
                {errors.medico && <p className="text-red-500 text-sm mt-1">{errors.medico}</p>}
            </div>

            {/* Idade gestacional */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="idadeGestacional" className="font-semibold mb-2">
                    Idade gestacional
                </label>
                <input
                    id="idadeGestacional"
                    type="text"
                    name="idadeGestacional"
                    value={formData.idadeGestacional}
                    onChange={handleChange}
                    placeholder="Idade gestacional"
                    className="input input-bordered w-full"
                />
                {errors.idadeGestacional && (
                    <p className="text-red-500 text-sm mt-1">{errors.idadeGestacional}</p>
                )}
            </div>

            {/* Data do parto */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="dataParto" className="font-semibold mb-2">
                    Data do parto
                </label>
                <input
                    id="dataParto"
                    type={tipo}
                    name="dataParto"
                    value={formData.dataParto}
                    onChange={handleChange}
                    onBlur={toggleTipo}
                    onFocus={toggleTipo}
                    placeholder="Data do parto"
                    className="input input-bordered w-full text-gray-400"
                />
                {errors.dataParto && (
                    <p className="text-red-500 text-sm mt-1">{errors.dataParto}</p>
                )}
            </div>

            {/* Tipo de parto */}
            <div className="mt-5 flex flex-col">
                <label htmlFor="tipoParto" className="font-semibold mb-2">
                    Tipo de parto
                </label>
                <input
                    id="tipoParto"
                    type="text"
                    name="tipoParto"
                    value={formData.tipoParto}
                    onChange={handleChange}
                    placeholder="Tipo de parto"
                    className="input input-bordered w-full"
                />
                {errors.tipoParto && (
                    <p className="text-red-500 text-sm mt-1">{errors.tipoParto}</p>
                )}
            </div>
        </div>
    );
}