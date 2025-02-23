import React from "react";
import IMG_ICON from '@/public/user.png';
import DOAMA_ICON from '@/public/icone.png';
import Image from "next/image";

interface NavbarProps {
  nome: string;
  sobrenome: string;
}

interface MenuItem {
  tipo: "principal" | "submenu";
  href?: string;
  src?: string;
  alt?: string;
  label?: string;
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ nome, sobrenome }) => {

  const deslogar = () => {
    console.log("Deslogando...");
    // Adicione sua lógica de deslogar aqui.
  };

  return (
    <div className="fixed navbar top-0 z-50 w-full bg-white shadow border-b border-gray-200">
      <div className="flex-1">
        <div className="w-10 ml-3 rounded-full">
          <a href="/workspace">
            <Image src={DOAMA_ICON} alt="Logo do doama" />
          </a>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full">
        <Image src={IMG_ICON} alt="Logo do doama" />
      </div>
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>
              {nome} {sobrenome}
            </summary>
            <ul className="bg-base-100 p-2">
              <li>
                <a href="#">Configurações</a>
              </li>
              <li>
                <button onClick={deslogar}>Sair</button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
