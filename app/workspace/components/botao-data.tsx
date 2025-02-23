// components/DateSelector.tsx

import React from 'react';

interface DateSelectorProps {
  dataSelecionada: string;
  onDataSelecionadaChange: (newDate: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ dataSelecionada, onDataSelecionadaChange }) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    onDataSelecionadaChange(newDate);
  };

  return (
    <div className="bg-white rounded-full shadow-md p-4 inline-flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center">
        <span className="font-semibold text-doama-rosado mb-2 lg:mb-0 lg:mr-4 text-center">
          Calendário Mensal
        </span>
        <div className="divider lg:divider-horizontal"></div>
        <input
          className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-doama-rosado focus:border-transparent text-center"
          type="month"
          value={dataSelecionada}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DateSelector;
