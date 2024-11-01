
import Image from "next/image";
import { ReactNode } from "react";
import coletaDeLeite from "../../../../public/coletaDeLeite.png";

interface ColetaDeLeiteProps {
  children: ReactNode;
}

export const ColetaDeLeite = ({ children }: ColetaDeLeiteProps) => {
  return (
    <div className="relative flex flex-col w-full h-screen lg:flex-row justify-end">
      <div className="grid h-full width-card bg-gray-50 place-items-center absolute inset-0 custom-rounded">
        {children}
      </div>

      <div className="width-img">
        <Image
          src={coletaDeLeite}
          alt="Mulher segurando um extrator de leite com um bebê de fundo"
          className="object-cover h-full"
          priority
        />
      </div>
    </div>
  );
}
