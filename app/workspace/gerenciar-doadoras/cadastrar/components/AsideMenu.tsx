// components/AsideMenu.tsx

import React from 'react';
import { MdAccountCircle, MdHistory, MdSearch, MdTextFields } from 'react-icons/md';

interface AsideMenuProps {
  canal: string;
  setCanal: (novoCanal: string) => void;
}

const AsideMenu: React.FC<AsideMenuProps> = ({ canal, setCanal }) => {
  return (
    <ul className="menu bg-base-100 mt-4 w-80 rounded-box">
      {/* Canal 1: Dados Pessoais */}
      <li>
        <a onClick={() => setCanal('1')} className="flex items-center cursor-pointer">
          {canal === '1' ? (
            <MdAccountCircle className="w-6 h-6" />
          ) : (
            <MdAccountCircle className="w-6 h-6 text-doama-rosado" />
          )}
          {canal === '1' ? (
            <h2 className="ml-2 font-bold">Dados Pessoais</h2>
          ) : (
            <h2 className="ml-2 text-doama-rosado">Dados Pessoais</h2>
          )}
        </a>
        {canal === '1' && (
          <ul>
            <li>
              <a onClick={() => setCanal('1')} className="cursor-pointer">Endereço, telefone, etc.</a>
            </li>
          </ul>
        )}
      </li>

      {/* Canal 2: História Pregressa */}
      <li>
        <a onClick={() => setCanal('2')} className="flex items-center cursor-pointer">
          {canal === '2' ? (
            <MdHistory className="w-6 h-6" />
          ) : (
            <MdHistory className="w-6 h-6 text-doama-rosado" />
          )}
          {canal === '2' ? (
            <h2 className="ml-2 font-bold">História Pregressa</h2>
          ) : (
            <h2 className="ml-2 text-doama-rosado">História Pregressa</h2>
          )}
        </a>
        {canal === '2' && (
          <ul>
            <li>
              <a onClick={() => setCanal('2')} className="cursor-pointer">Local do pré-natal, etc.</a>
            </li>
          </ul>
        )}
      </li>

      {/* Canal 3: Exames Realizados */}
      <li>
        <a onClick={() => setCanal('3')} className="flex items-center cursor-pointer">
          {canal === '3' ? (
            <MdSearch className="w-6 h-6" />
          ) : (
            <MdSearch className="w-6 h-6 text-doama-rosado" />
          )}
          {canal === '3' ? (
            <h2 className="ml-2 font-bold">Exames Realizados</h2>
          ) : (
            <h2 className="ml-2 text-doama-rosado">Exames Realizados</h2>
          )}
        </a>
        {canal === '3' && (
          <ul>
            <li>
              <a onClick={() => setCanal('3')} className="cursor-pointer">VDLR, HBsAg, etc.</a>
            </li>
          </ul>
        )}
      </li>

      {/* Canal 4: História Atual */}
      <li>
        <a onClick={() => setCanal('4')} className="flex items-center cursor-pointer">
          {canal === '4' ? (
            <MdTextFields className="w-6 h-6" />
          ) : (
            <MdTextFields className="w-6 h-6 text-doama-rosado" />
          )}
          {canal === '4' ? (
            <h2 className="ml-2 font-bold">História Atual</h2>
          ) : (
            <h2 className="ml-2 text-doama-rosado">História Atual</h2>
          )}
        </a>
        {canal === '4' && (
          <ul>
            <li>
              <a onClick={() => setCanal('4')} className="cursor-pointer">Tabagismo, etc.</a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default AsideMenu;
