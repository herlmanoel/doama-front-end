// components/RotaDeColetaDomiciliar.tsx
"use client"

import React, { useState } from "react";
import Calendario from "../components/calendario";
import WorkspaceLayout from "../components/workspace-layout";
import DateSelector from "../components/botao-data";
// import { BsGitBranch } from "react-icons/bs"; // React Icons
// import BotaoPersonalizado from "./BotaoPersonalizado";
// import Calendario from "./Calendario";

const RotaDeColetaDomiciliar: React.FC = () => {
  // Estado inicial da data
  const [data, setData] = useState<string>(new Date().toISOString());

  return (
    <WorkspaceLayout>
      <div className="flex flex-col">
      {/* Título e ícone */}
      <div className="flex mt-2 items-center" style={{ color: "#AA6665" }}>
        {/* <BsGitBranch className="w-6 h-6 ml-1" /> */}
        <h2 className="ml-2 text-2xl font-semibold">Rota de Coleta Domiciliar</h2>
      </div>

      {/* Botão personalizado */}
      <div className="mt-7 ml-2">
        <DateSelector dataSelecionada={data} onDataSelecionadaChange={setData} />
      </div>

      {/* Calendário */}
      <div className="mt-9 ml-2">
        {/* <Calendario data={data} onDataChange={setData} /> */}
        <Calendario  data={data} />
      </div>
    </div>
    </WorkspaceLayout>
  );
};

export default RotaDeColetaDomiciliar;
