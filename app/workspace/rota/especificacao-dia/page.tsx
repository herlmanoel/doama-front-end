import React from 'react';
import Link from 'next/link';
import { MdChevronLeft } from 'react-icons/md'; // Importando o ícone equivalente
import WorkspaceLayout from '../../components/workspace-layout';

interface DayDetailsProps {
  dataSelecionada: string; // Exemplo: "24/10/2023"
}

const DayDetails: React.FC<DayDetailsProps> = ({ dataSelecionada }) => {
  return (
    <WorkspaceLayout>
      {/* Header com o ícone e a data */}
      <div className="p-4 text-doama-rosado">
        <div className="mt-2 flex items-center">
          <Link href="/workspace/rota" passHref>
            <div className="flex items-center">
              <MdChevronLeft className="w-9 h-9" />
            </div>
          </Link>
          <Link href="/workspace/rota" passHref>
            <div>
              <h2 className="ml-2 font-medium text-3xl">{`Dia ${dataSelecionada}`}</h2>
            </div>
          </Link>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="w-[40rem] mx-auto">
        {/* Ocorrências */}
        <div className="flex flex-col mt-5">
          <p className="font-semibold">Ocorrências</p>
          <textarea
            placeholder="Registre aqui as intercorrências da coleta deste dia"
            className="textarea mt-4 textarea-bordered textarea-lg w-full"
          />
        </div>

        <div className="divider"></div>

        {/* Controle de Temperatura da Caixa Térmica */}
        <div className="flex flex-col mt-5">
          <p className="font-semibold">Controle de temperatura da caixa térmica</p>
          <input
            type="text"
            placeholder="Saída do banco de leite"
            className="input input-bordered w-60 mt-5"
          />
          <input
            type="text"
            placeholder="Chegada na 1° casa de doadora"
            className="input input-bordered w-60 mt-5"
          />
          <input
            type="text"
            placeholder="Última casa de doadora"
            className="input input-bordered w-60 mt-5"
          />
          <input
            type="text"
            placeholder="Chegada no banco de leite"
            className="input input-bordered w-60 mt-5"
          />
        </div>

        <div className="divider"></div>

        {/* Rota */}
        <div className="flex flex-col mt-5">
          <p className="font-semibold">Rota</p>
          <input
            type="text"
            placeholder="Saída do banco de leite"
            className="input input-bordered w-60 mt-5"
          />
          <input
            type="text"
            placeholder="Chegada na 1° casa de doadora"
            className="input input-bordered w-60 mt-5"
          />
          <input
            type="text"
            placeholder="Última casa de doadora"
            className="input input-bordered w-60 mt-5"
          />
          <input
            type="text"
            placeholder="Chegada no banco de leite"
            className="input input-bordered w-60 mt-5"
          />
        </div>
      </div>
      </WorkspaceLayout>
  );
};

export default DayDetails;
