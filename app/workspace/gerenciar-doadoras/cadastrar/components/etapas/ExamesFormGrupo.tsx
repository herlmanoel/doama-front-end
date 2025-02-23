import { IFormData } from "../../page";
import { ContainerFlex } from "../ContainerFlex";

export const ExamesFormGrupo = ({
    formData,
    errors,
    handleChange,
}: {
    formData: IFormData;
    errors: Partial<Record<keyof IFormData, string>>;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}) => {
    return (
        <div>
            {/* VDRL */}
            <ContainerFlex>
                <p className="font-semibold mb-2">VDRL</p>
                <div className="flex mt-3 space-x-14">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="vdrl-positivo"
                            name="vdrl"
                            value="1"
                            checked={formData.vdrl === "1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="vdrl-positivo" className="ml-2 cursor-pointer">
                            Positivo
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="vdrl-negativo"
                            name="vdrl"
                            value="0"
                            checked={formData.vdrl === "0"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="vdrl-negativo" className="ml-2 cursor-pointer">
                            Negativo
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="vdrl-nd"
                            name="vdrl"
                            value="-1"
                            checked={formData.vdrl === "-1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="vdrl-nd" className="ml-2 cursor-pointer">
                            Não disponível
                        </label>
                    </div>
                </div>
                {errors.vdrl && <p className="text-red-500 text-sm mt-1">{errors.vdrl}</p>}
            </ContainerFlex>

            {/* HBsAg */}
            <ContainerFlex>
                <p className="font-semibold mb-2">HBsAg</p>
                <div className="flex mt-3 space-x-14">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hbsag-positivo"
                            name="hbsag"
                            value="1"
                            checked={formData.hbsag === "1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="hbsag-positivo" className="ml-2 cursor-pointer">
                            Positivo
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hbsag-negativo"
                            name="hbsag"
                            value="0"
                            checked={formData.hbsag === "0"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="hbsag-negativo" className="ml-2 cursor-pointer">
                            Negativo
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hbsag-nd"
                            name="hbsag"
                            value="-1"
                            checked={formData.hbsag === "-1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="hbsag-nd" className="ml-2 cursor-pointer">
                            Não disponível
                        </label>
                    </div>
                </div>
                {errors.hbsag && <p className="text-red-500 text-sm mt-1">{errors.hbsag}</p>}
            </ContainerFlex>

            {/* FTA-ABS */}
            <ContainerFlex>
                <p className="font-semibold mb-2">FTA-ABS</p>
                <div className="flex mt-3 space-x-14">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="ftaabs-positivo"
                            name="ftaabs"
                            value="1"
                            checked={formData.ftaabs === "1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="ftaabs-positivo" className="ml-2 cursor-pointer">
                            Positivo
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="ftaabs-negativo"
                            name="ftaabs"
                            value="0"
                            checked={formData.ftaabs === "0"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="ftaabs-negativo" className="ml-2 cursor-pointer">
                            Negativo
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="ftaabs-nd"
                            name="ftaabs"
                            value="-1"
                            checked={formData.ftaabs === "-1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="ftaabs-nd" className="ml-2 cursor-pointer">
                            Não disponível
                        </label>
                    </div>
                </div>
                {errors.ftaabs && <p className="text-red-500 text-sm mt-1">{errors.ftaabs}</p>}
            </ContainerFlex>

            {/* HIV */}
            <ContainerFlex>
                <p className="font-semibold mb-2">HIV</p>
                <div className="flex mt-3 space-x-14">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hiv-positivo"
                            name="hiv"
                            value="1"
                            checked={formData.hiv === "1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="hiv-positivo" className="ml-2 cursor-pointer">
                            Positivo
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hiv-negativo"
                            name="hiv"
                            value="0"
                            checked={formData.hiv === "0"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="hiv-negativo" className="ml-2 cursor-pointer">
                            Negativo
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="hiv-nd"
                            name="hiv"
                            value="-1"
                            checked={formData.hiv === "-1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="hiv-nd" className="ml-2 cursor-pointer">
                            Não disponível
                        </label>
                    </div>
                </div>
                {errors.hiv && <p className="text-red-500 text-sm mt-1">{errors.hiv}</p>}
            </ContainerFlex>

            {/* Transfusão sanguínea */}
            <ContainerFlex>
                <p className="font-semibold mb-2">
                    Transfusão sanguínea nos últimos 5 anos?
                </p>
                <div className="flex mt-3 space-x-14">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="transfusao-sim"
                            name="transfusao"
                            value="1"
                            checked={formData.transfusao === "1"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="transfusao-sim" className="ml-2 cursor-pointer">
                            Sim
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="transfusao-nao"
                            name="transfusao"
                            value="0"
                            checked={formData.transfusao === "0"}
                            onChange={handleChange}
                            className="radio"
                        />
                        <label htmlFor="transfusao-nao" className="ml-2 cursor-pointer">
                            Não
                        </label>
                    </div>
                </div>
                {errors.transfusao && (
                    <p className="text-red-500 text-sm mt-1">{errors.transfusao}</p>
                )}
            </ContainerFlex>

            {/* Tatuagem e Piercing */}
            <div className="flex flex-col md:flex-row justify-between mt-6">
                {/* Tatuagem */}
                <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
                    <p className="font-semibold mb-2">Tem tatuagem?</p>
                    <div className="flex mt-3 space-x-14">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="tatuagem-sim"
                                name="tatuagem"
                                value="1"
                                checked={formData.tatuagem === "1"}
                                onChange={handleChange}
                                className="radio"
                            />
                            <label htmlFor="tatuagem-sim" className="ml-2 cursor-pointer">
                                Sim
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="tatuagem-nao"
                                name="tatuagem"
                                value="0"
                                checked={formData.tatuagem === "0"}
                                onChange={handleChange}
                                className="radio"
                            />
                            <label htmlFor="tatuagem-nao" className="ml-2 cursor-pointer">
                                Não
                            </label>
                        </div>
                    </div>
                    <label htmlFor="tatuagemTexto" className="sr-only">
                        Há quanto tempo?
                    </label>
                    <input
                        id="tatuagemTexto"
                        type="text"
                        name="tatuagemTexto"
                        value={formData.tatuagemTexto}
                        onChange={handleChange}
                        placeholder="Se sim, há quanto tempo?"
                        className="input input-bordered mt-5 w-full"
                    />
                    {errors.tatuagem && (
                        <p className="text-red-500 text-sm mt-1">{errors.tatuagem}</p>
                    )}
                </div>

                {/* Piercing */}
                <div className="flex flex-col w-full md:w-1/2">
                    <p className="font-semibold mb-2">Tem piercing?</p>
                    <div className="flex mt-3 space-x-14">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="piercing-sim"
                                name="piercing"
                                value="1"
                                checked={formData.piercing === "1"}
                                onChange={handleChange}
                                className="radio"
                            />
                            <label htmlFor="piercing-sim" className="ml-2 cursor-pointer">
                                Sim
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="piercing-nao"
                                name="piercing"
                                value="0"
                                checked={formData.piercing === "0"}
                                onChange={handleChange}
                                className="radio"
                            />
                            <label htmlFor="piercing-nao" className="ml-2 cursor-pointer">
                                Não
                            </label>
                        </div>
                    </div>
                    <label htmlFor="piercingTexto" className="sr-only">
                        Há quanto tempo?
                    </label>
                    <input
                        id="piercingTexto"
                        type="text"
                        name="piercingTexto"
                        value={formData.piercingTexto}
                        onChange={handleChange}
                        placeholder="Se sim, há quanto tempo?"
                        className="input input-bordered mt-5 w-full"
                    />
                    {errors.piercing && (
                        <p className="text-red-500 text-sm mt-1">{errors.piercing}</p>
                    )}
                </div>
            </div>

            <ContainerFlex className="w-full">
                <p className="font-semibold mb-2">Intercorrência na gestação</p>
                <label htmlFor="intercorrencia" className="sr-only">
                    Descreva as intercorrências
                </label>
                <textarea
                    id="intercorrencia"
                    name="intercorrencia"
                    value={formData.intercorrencia}
                    onChange={handleChange}
                    placeholder="Descreva as intercorrências desta paciente"
                    className="textarea textarea-bordered textarea-lg w-full mt-4"
                />
                {errors.intercorrencia && (
                    <p className="text-red-500 text-sm mt-1">{errors.intercorrencia}</p>
                )}
            </ContainerFlex>
        </div>
    );
}