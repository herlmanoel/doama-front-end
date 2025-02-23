// components/Calendar.tsx
"use client"

import React, { useMemo } from 'react';
import Link from 'next/link';
// rota.ts

export interface MesInfo {
  diasDoMes: number;
  offset: number; 
}

/**
 * Retorna informações sobre o mês com base na data fornecida.
 * 
 * @param data - Uma string representando a data no formato 'YYYY-MM' ou 'YYYY-MM-DD'.
 * @returns Um objeto do tipo MesInfo contendo o número de dias no mês e o deslocamento do primeiro dia da semana.
 */
export function getMes(data: string): MesInfo {
  const date = new Date(data);

  // Verificar se a data é válida
  if (isNaN(date.getTime())) {
    throw new Error("Data inválida. Por favor, forneça uma data no formato 'YYYY-MM' ou 'YYYY-MM-DD'.");
  }

  // Obter ano e mês
  const ano = date.getFullYear();
  const mes = date.getMonth();

  // Calcular o número de dias no mês
  const diasDoMes = new Date(ano, mes + 1, 0).getDate();

  // Calcular o deslocamento (primeiro dia do mês na semana)
  const offset = new Date(ano, mes, 1).getDay();

  return {
    diasDoMes,
    offset,
  };
}


interface CalendarProps {
  data: string;
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  // Calcula informações do mês usando useMemo para otimização
  const { diasDoMes, offset, quantidadeSemanas } = useMemo(() => {
    const mes: MesInfo = getMes(data);
    return {
      diasDoMes: mes.diasDoMes,
      offset: mes.offset,
      quantidadeSemanas: Math.ceil((mes.diasDoMes + mes.offset) / 7),
    };
  }, [data]);

  // Dias da semana
  const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {Array.from({ length: quantidadeSemanas }).map((_, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {/* Cabeçalho da semana */}
            {weekIndex === 0 && (
              <thead>
                <tr>
                  {diasDaSemana.map((dia) => (
                    <th key={dia}>{dia}</th>
                  ))}
                </tr>
              </thead>
            )}
            {/* Corpo da semana */}
            <tbody>
              <tr>
                {Array.from({ length: 7 }).map((_, diaIndex) => {
                  const diaNumero = weekIndex * 7 + diaIndex - offset + 1;

                  // Células vazias antes do primeiro dia do mês
                  if (weekIndex === 0 && diaIndex < offset) {
                    return <th key={diaIndex}></th>;
                  }

                  // Células vazias após o último dia do mês
                  if (diaNumero > diasDoMes) {
                    return <th key={diaIndex}></th>;
                  }

                  // Células com dias do mês
                  return (
                    <th key={diaIndex}>
                      <Link href={`/workspace/rota/especificacao-dia?dia=${diaNumero}`} passHref>
                        
                          <div className="card h-[30vh] bg-white text-gray-500 hover:bg-gray-100 transition-colors">
                            <div className="card-body flex items-center justify-center">
                              <h2 className="card-title">{diaNumero}</h2>
                              {/* Adicione ícones ou outras informações aqui, se necessário */}
                            </div>
                          </div>
                      </Link>
                    </th>
                  );
                })}
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default Calendar;
