"use client";

import Navbar from "@/components/navbar";
import { fetchGet } from "@/lib/fetch-utils";
import { useState, useEffect } from "react";
import {
  MdOutlineAccountCircle,
  MdOutlinePersonAddAlt,
  MdFilterAlt,
  MdOutlineFilterList,
  MdSortByAlpha,
  MdDateRange,
  MdOutlinePlace,
  MdOutlineBookmark,
  MdOutlineArrowForward,
  MdOutlineCheckCircle,
  MdOutlineErrorOutline,
  MdOutlineClose,
} from "react-icons/md";
import WorkspaceLayout from "../components/workspace-layout";

interface Doadora {
  id: number;
  nome: string;
  dataParto: string;
  bairro: string;
  status: number;
}

const IMG_ICON = "/src/img/user.png";

const GerenciarDoadoras: React.FC = () => {
  const [qtdDoadoras, setQtdDoadoras] = useState("5");
  const [totalDoadoras, setTotalDoadoras] = useState(-1);
  const [doadoras, setDoadoras] = useState<{ status: boolean; doadoras: Doadora[] }>({ status: false, doadoras: [] });

  useEffect(() => {
    const fetchDoadoras = async () => {
      try {
        const response = await fetchGet<Doadora[]>('/doadoras?status=1');
        const doadoras: Doadora[] = await response;
        setDoadoras({ status: true, doadoras });
        setTotalDoadoras(doadoras.length);
      } catch (error) {
        console.log('Failed to fetch doadoras:', error);
      }
    };
    fetchDoadoras();
  }, [qtdDoadoras]);

  const handleCadastroDoadora = () => {
    window.location.href = "/workspace/gerenciar-doadoras/cadastrar";
  };

  const handleEncaminharDoadora = (idDoadora: number) => {
    window.location.href = `/workspace/gerenciar/especificacao-doadora/?idDoadora=${idDoadora}`;
  };

  const handleAlterarQtdDoadoras = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setQtdDoadoras(value);
    if (parseInt(value) > totalDoadoras) {
      setQtdDoadoras(totalDoadoras.toString());
    }
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  const tratarDadosDoacoes = async (doadoraId: number) => {
    return { ultimaColeta: "10/10/2024", totalDoado: 1000 };
  };

  return (
    <WorkspaceLayout>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex mt-10 corTitulo items-center">
            <MdOutlineAccountCircle className="w-8 h-8 ml-1 text-doama-rosado" />
            <h2 className="ml-2 text-2xl font-semibold text-doama-rosado" >Gerenciar doadoras</h2>
          </div>
          <button
            onClick={handleCadastroDoadora}
            className="btn btn-active mt-12 text-white btn-accent flex items-center"
          >
            <MdOutlinePersonAddAlt className="w-7 h-auto mr-1" />
            Cadastrar doadora
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Buscar Doadora"
            className="input input-bordered w-full ml-2 mt-12 max-w-xs"
          />
          <div className="mt-12 flex">
            {/* Ordenar */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost corTitulo m-1 text-doama-rosado">
                <MdFilterAlt className="w-7 mr-2 h-auto " />
                <p>Ordenar</p>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <MdSortByAlpha className="h-auto w-5" />
                    Ordem Alfabética
                  </a>
                </li>
                <li>
                  <a>
                    <MdDateRange className="h-auto w-5" />
                    Ordem de data
                  </a>
                </li>
              </ul>
            </div>

            {/* Filtrar */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost corTitulo m-1 text-doama-rosado">
                <MdOutlineFilterList className="w-7 mr-2 h-auto" />
                <p>Filtrar</p>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <MdOutlinePlace className="h-auto w-5" />
                    Bairro
                  </a>
                </li>
                <li>
                  <a>
                    <MdOutlineBookmark className="h-auto w-5" />
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-4 text-doama-rosado">
          <div className="badge h-10 w-auto badge-outline">
            <p className="ml-2 text-base">Criado</p>
            <MdOutlineClose className="ml-2 h-auto w-5" />
          </div>
          <div className="badge ml-3 h-10 w-auto badge-outline">
            <p className="ml-2 text-base">Retornado</p>
            <MdOutlineClose className="ml-2 h-auto w-5" />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between ml-2 mt-3">
          <div className="ml-1">
            <p className="text-sm">
              Exibindo <b>{qtdDoadoras} de {totalDoadoras}</b> doadoras:
            </p>
          </div>
          <div className="flex">
            <p className="mt-3" style={{ whiteSpace: "nowrap" }}>
              Itens por página:
            </p>
            <select
              value={qtdDoadoras}
              onChange={handleAlterarQtdDoadoras}
              className="corTitulo ml-4 font-semibold select widthSelectCustom max-w-xs"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Doadora</th>
                <th>Data do parto</th>
                <th>Última coleta</th>
                <th>Total Doado</th>
                <th>Bairro</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doadoras.status ? (
                doadoras.doadoras.slice(0, parseInt(qtdDoadoras)).map((usuaria) => (
                  <tr key={usuaria.id}>
                    <td>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={IMG_ICON} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div className="font-bold">{usuaria.nome}</div>
                      </div>
                    </td>
                    <td>{formatarData(usuaria.dataParto)}</td>
                    <td>{/* Lógica da coleta */}</td>
                    <td>{/* Lógica do total doado */}</td>
                    <td>{usuaria.bairro}</td>
                    <td>
                      {usuaria.status === 1 ? (
                        <MdOutlineCheckCircle className="text-cyan-400 w-7 h-auto" />
                      ) : (
                        <MdOutlineErrorOutline className="text-gray-400 w-7 h-auto" />
                      )}
                    </td>
                    <td className="text-green-500">
                      <button onClick={() => handleEncaminharDoadora(usuaria.id)}>
                        <MdOutlineArrowForward className="w-7 h-auto" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>
                    <span className="loading loading-spinner loading-lg"></span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default GerenciarDoadoras;
