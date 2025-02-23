// components/TelefoneInput.tsx

import React from 'react';

interface TelefoneInputProps {
  tipoTelefone: 'fixo' | 'celular';
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
}

const TelefoneInput: React.FC<TelefoneInputProps> = ({ tipoTelefone, phoneNumber, setPhoneNumber }) => {
  return (
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder={`Digite o ${tipoTelefone === 'fixo' ? 'telefone fixo' : 'celular'}`}
        className="input input-bordered w-full"
      />
  );
};

export default TelefoneInput;
