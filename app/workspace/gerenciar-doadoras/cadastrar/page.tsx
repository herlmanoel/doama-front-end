"use client";

import React, { useState, useEffect, FormEvent } from "react";
import {
    FaChevronLeft,
    FaSave,
    FaCalendarAlt,
    FaChevronDown,
    FaExclamationTriangle
} from "react-icons/fa";
import AsideMenu from "./components/AsideMenu";
import WorkspaceLayout from "../../components/workspace-layout";

import { DadosPessoaisFormGrupo } from "./components/etapas/DadosPessoaisFormGrupo";
import { PreNatalFormGrupo } from "./components/etapas/PreNatalFormGrupo";
import { ExamesFormGrupo } from "./components/etapas/ExamesFormGrupo";
import { HabitosFormGrupo } from "./components/etapas/HabitosFormGrupo";

 const etapas = [
    { id: "1", nome: "Dados Pessoais", component: DadosPessoaisFormGrupo },
    { id: "2", nome: "História Pregressa", component: PreNatalFormGrupo },
    { id: "3", nome: "Exames Realizados", component: ExamesFormGrupo },
    { id: "4", nome: "História Atual", component: HabitosFormGrupo },
];



export interface IFormData {
    canal: string;
    // Canal 1
    nome: string;
    dataNascimento: string;
    endereco: string;
    cidade: string;
    bairro: string;
    pontoReferencia: string;
    telefoneFixo: string;
    celular: string;
    profissao: string;
    // Canal 2
    preNatal: string;
    medico: string;
    idadeGestacional: string;
    dataParto: string;
    tipoParto: string;
    // Canal 3
    vdrl: string;
    hbsag: string;
    ftaabs: string;
    hiv: string;
    transfusao: string;
    tatuagem: string;
    tatuagemTexto: string;
    piercing: string;
    piercingTexto: string;
    intercorrencia: string;
    // Canal 4
    tabagista: string;
    alcool: string;
    drogas: string;
    drogasTexto: string;
}

export const requiredInputsPorCanal: Record<string, (keyof IFormData)[]> = {
    "1": ["nome", "dataNascimento", "endereco", "cidade", "bairro"],
    "2": ["preNatal", "medico", "idadeGestacional", "dataParto", "tipoParto"],
    "3": [ "vdrl", "hbsag", "ftaabs", "hiv", "transfusao", "tatuagem", "piercing", "intercorrencia" ],
    "4": ["tabagista", "alcool", "drogas"],
};

const CadastrarDoadora: React.FC = () => {
    const [globalFormData, setGlobalFormData] = useState<IFormData>({
        canal: "1",
        nome: "",
        dataNascimento: "",
        endereco: "",
        cidade: "",
        bairro: "",
        pontoReferencia: "",
        telefoneFixo: "",
        celular: "",
        profissao: "",

        preNatal: "",
        medico: "",
        idadeGestacional: "",
        dataParto: "",
        tipoParto: "",

        vdrl: "0",
        hbsag: "0",
        ftaabs: "0",
        hiv: "0",
        transfusao: "0",
        tatuagem: "0",
        tatuagemTexto: "",
        piercing: "0",
        piercingTexto: "",
        intercorrencia: "",

        tabagista: "0",
        alcool: "0",
        drogas: "0",
        drogasTexto: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof IFormData, string>>>(
        {}
    );
    const [tipo, setTipo] = useState<"text" | "date">("text");

    const [dataAtual, setDataAtual] = useState<string>("");

    useEffect(() => {
        setDataAtual(new Date().toLocaleDateString("pt-BR"));
    }, []);

    const toggleTipo = () => {
        setTipo((prevTipo) => (prevTipo === "text" ? "date" : "text"));
    };

    async function salvarEtapa1(dados: Partial<IFormData>) {
        console.log(">> Salvando etapa 1 (canal 1)...", dados);
    }
    async function salvarEtapa2(dados: Partial<IFormData>) {
        console.log(">> Salvando etapa 2 (canal 2)...", dados);
    }
    async function salvarEtapa3(dados: Partial<IFormData>) {
        console.log(">> Salvando etapa 3 (canal 3)...", dados);
    }
    async function salvarEtapa4(dados: Partial<IFormData>) {
        console.log(">> Salvando etapa 4 (canal 4)...", dados);
    }

    const validateField = (name: keyof IFormData, value: string): string => {
        const requiredFields = requiredInputsPorCanal[globalFormData.canal] || [];

        if (requiredFields.includes(name) && !value.trim()) {
            return "Campo obrigatório.";
        }

        if (name === "dataNascimento" || name === "dataParto") {
            if (value.length > 0 && value.length < 4) {
                return "Data inválida.";
            }
        }
        return "";
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const fieldName = name as keyof IFormData;

        console.log("handleChange", fieldName, value, name);

        const errorMessage = validateField(fieldName, value);

        setErrors((prev) => ({
            ...prev,
            [fieldName]: errorMessage ? errorMessage : undefined,
        }));

        setGlobalFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    const mostrarCanal = (currentCanal: string) =>
        globalFormData.canal === currentCanal;

    const canalEstaValido = (): boolean => {
        const canal = globalFormData.canal;
        const fields = requiredInputsPorCanal[canal] || [];

        for (const field of fields) {
            const fieldName = field as keyof IFormData;
            if (!globalFormData[fieldName]?.trim()) return false; 
            if (errors[fieldName]) return false;
        }
        return true;
    };

    const handleProximo = async () => {
        if (!canalEstaValido()) return;

        const canalAtual = globalFormData.canal;
        switch (canalAtual) {
            case "1":
                await salvarEtapa1(globalFormData);
                break;
            case "2":
                await salvarEtapa2(globalFormData);
                break;
            case "3":
                await salvarEtapa3(globalFormData);
                break;
        }

        setGlobalFormData((prev) => ({
            ...prev,
            canal: (parseInt(prev.canal, 10) + 1).toString(),
        }));
    };

    const handleSalvarFinal = async () => {
        if (!canalEstaValido()) return;
        await salvarEtapa4(globalFormData);
        alert("Formulário finalizado com sucesso!");
    };

    const formularioDoadora = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Enviando dados completos do formulário:", globalFormData);
        // Exemplo: fetch total se desejar
        // await fetch("/api/doadora", { method: "POST", body: JSON.stringify(globalFormData) });
        alert("Formulário enviado (completo) com sucesso!");
    };

    const renderizarGrupoForm = (canal: string) => {
        const etapaAtual = etapas.find((etapa) => etapa.id === canal);
    
        if (!etapaAtual) {
            console.warn(`Etapa com id ${canal} não encontrada.`);
            return null;
        }
    
        const ComponenteEtapa = etapaAtual.component;
    
        return (
            <ComponenteEtapa
                formData={globalFormData}
                errors={errors}
                handleChange={handleChange}
                validateField={validateField}
                setErrors={setErrors}
                setGlobalFormData={setGlobalFormData}
                tipo={tipo}
                toggleTipo={toggleTipo}
            />
        );
    };

    return (
        <WorkspaceLayout>
            <div className="flex w-full h-full">
                <div className="w-1/4 p-4">
                    <a href="/workspace/gerenciar">
                        <div className="flex mt-2 items-center text-doama-rosado cursor-pointer">
                            <FaChevronLeft className="w-8 h-8" />
                            <h2 className="ml-2 text-3xl font-semibold">Cadastrar Doadora</h2>
                        </div>
                    </a>
                    <AsideMenu
                        canal={globalFormData.canal}
                        setCanal={(valor) => {
                            setGlobalFormData((prev) => ({ ...prev, canal: valor }));
                        }}
                    />
                </div>

                <div className="w-3/4 p-4">
                    <div className="w-full max-w-[60rem] mx-auto bg-white shadow-lg p-6 rounded-box">
                        <div className="h-full relative pb-20">
                            {/* Cabeçalho com data */}
                            <div className="flex items-center">
                                <div className="flex items-center text-doama-rosado">
                                    <FaCalendarAlt className="w-8 h-8" />
                                    <p className="ml-1 font-semibold">Data de cadastro:</p>
                                </div>
                                <p className="ml-2">{dataAtual}</p>
                            </div>

                            <form onSubmit={formularioDoadora}>
                                {/* {mostrarCanal("1") && (
                                    <DadosPessoaisFormGrupo
                                        formData={globalFormData}
                                        errors={errors}
                                        handleChange={handleChange}
                                        validateField={validateField}
                                        setErrors={setErrors}
                                        setGlobalFormData={setGlobalFormData}
                                        tipo={tipo}
                                        toggleTipo={toggleTipo}
                                    />
                                )}

                                {mostrarCanal("2") && (
                                    <PreNatalFormGrupo
                                        formData={globalFormData}
                                        errors={errors}
                                        handleChange={handleChange}
                                        tipo={tipo}
                                        toggleTipo={toggleTipo}
                                    />
                                )}

                                {mostrarCanal("3") && (
                                    <ExamesFormGrupo
                                        formData={globalFormData}
                                        errors={errors}
                                        handleChange={handleChange}
                                    />
                                )}

                                {mostrarCanal("4") && (
                                    <HabitosFormGrupo
                                        formData={globalFormData}
                                        errors={errors}
                                        handleChange={handleChange}
                                    />
                                )} */}

                                {etapas.map((etapa) => (
                                    mostrarCanal(etapa.id) && (
                                        <React.Fragment key={etapa.id}>
                                            {renderizarGrupoForm(etapa.id)}
                                        </React.Fragment>
                                    )
                                ))}

                                {/* Botões de navegação/salvar, condicionais */}
                                {/* Próximo (caso não seja o último canal) */}
                                {!mostrarCanal("4") && canalEstaValido() && (
                                    <div className="fixed bottom-14 left-1/2 transform -translate-x-1/2">
                                        <button
                                            type="button"
                                            className="btn bg-doama-rosado text-white rounded-full flex items-center"
                                            onClick={handleProximo}
                                        >
                                            Próximo
                                            <FaChevronDown className="w-6 h-6 ml-2" />
                                        </button>
                                    </div>
                                )}

                                {!mostrarCanal("4") && !canalEstaValido() && (
                                    <div className="fixed bottom-14 left-1/2 transform -translate-x-1/2">
                                        <button
                                            type="button"
                                            className="btn bg-red-500 text-white rounded-full flex items-center justify-center opacity-90 cursor-not-allowed"
                                        >
                                            <div className="flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 mr-2" />
                                                Preencha todos os campos obrigatórios corretamente para avançar.
                                            </div>
                                        </button>
                                    </div>

                                )}

                                {/* Se for o último canal e estiver válido, exibe Salvar Final */}
                                {mostrarCanal("4") && canalEstaValido() && (
                                    <div className="fixed bottom-14 left-3/4">
                                        <button
                                            type="button"
                                            onClick={handleSalvarFinal}
                                            className="btn bg-doama-rosado text-white flex items-center"
                                        >
                                            <FaSave className="w-5 h-5 mr-2" />
                                            Salvar
                                        </button>
                                    </div>
                                )}

                                {/* Se for o último canal, mas não estiver válido */}
                                {mostrarCanal("4") && !canalEstaValido() && (
                                    <div className="fixed bottom-14 left-1/2 transform -translate-x-1/2">
                                        <button
                                            type="button"
                                            className="btn bg-red-500 text-white rounded-full flex items-center justify-center opacity-90 cursor-not-allowed"
                                            disabled
                                        >
                                            <div className="flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 mr-2" />
                                                Preencha todos os campos obrigatórios corretamente para avançar.
                                            </div>
                                        </button>
                                    </div>

                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </WorkspaceLayout>
    );
};

export default CadastrarDoadora;
