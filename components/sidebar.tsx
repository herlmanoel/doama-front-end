"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import {
  MdPoll,
  MdAccountCircle,
  MdOutlineTextSnippet,
  MdOutlineLocalShipping,
  MdChevronLeft,
  MdChevronRight,
  MdOutlineCheckCircle,
  MdOutlineSource,
} from "react-icons/md";
import { usePathname } from "next/navigation"; // Import do usePathname
import Link from "next/link"; // Import do Link para navegação client-side

export interface MenuItem {
  label: string;
  Icon: IconType;
  href: string;
  onClick?: () => void;
}

const itensMenu: MenuItem[] = [
  {
    label: "Dashboard",
    Icon: MdPoll,
    href: "/workspace/dashboard",
  },
  {
    label: "Gerenciar as Doadoras",
    Icon: MdAccountCircle,
    href: "/workspace/gerenciar-doadoras",
  },
  {
    label: "Rota de Coleta Domiciliar",
    Icon: MdOutlineSource,
    href: "/workspace/rota",
  },
  {
    label: "Cadastro do Leite Doado",
    Icon: MdOutlineTextSnippet,
    href: "/workspace/cadastro-leite-doado",
  },
  {
    label: "Processamento do Leite",
    Icon: MdOutlineCheckCircle,
    href: "/workspace/processamento-leite",
  },
  {
    label: "Transporte do Leite",
    Icon: MdOutlineLocalShipping,
    href: "/workspace/transporte-leite",
  },
];

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <nav
      className={`bg-base-100 transition-width duration-200 ${
        expanded ? "w-64" : "w-20"
      } h-screen flex flex-col justify-between`}
    >
      <ul className={`list-none flex flex-col justify-center items-center p-5 flex-1`}>
        {itensMenu.map(({  href, Icon, label, onClick }) => (
          <ItemMenu
            key={label}
            href={href}
            Icon={Icon}
            label={label}
            expanded={expanded}
            isActive={pathname === href}
            onClick={onClick}
          />
        ))}
      </ul>

      <div className="flex justify-center items-center mb-4">
        <button onClick={toggleExpanded} className="focus:outline-none">
          {expanded ? (
            <MdChevronLeft className="w-6 h-6 text-doama-rosado" />
          ) : (
            <MdChevronRight className="w-6 h-6 text-doama-rosado" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;


interface ItemMenuProps {
  href: string;
  Icon: IconType;
  label: string;
  expanded: boolean;
  isActive: boolean;
  onClick?: () => void;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  href,
  Icon,
  label,
  expanded,
  isActive,
  onClick,
}) => {
  const commonClasses = `flex w-full p-3 rounded-lg transition-colors duration-200 ${
    expanded ? " items-center justify-start" : "flex-row items-center justify-start"
  }`;

  const iconContainerClasses = `w-10 h-10 flex items-center justify-center rounded-full ${
    isActive
      ? "bg-doama-rosado text-white bg-opacity-70"
      : "hover:bg-gray-300 text-gray-600"
  }`;

  return (
    <li className={`mt-6 flex ${expanded ? "h-auto w-full" : "h-16 w-16"}`}>
      <Link href={href} className={commonClasses} onClick={onClick}>
        <div className={iconContainerClasses}>
          <Icon className="w-6 h-6" />
        </div>
        {expanded && (
          <div className="ml-2 flex items-center text-sm transition-opacity duration-200 text-doama-rosado">
            {label}
          </div>
        )}
      </Link>
    </li>
  );
};
