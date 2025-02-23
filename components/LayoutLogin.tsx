import Image from "next/image";
import React from "react";
import coletaDeLeite from "../public/coletaDeLeite.png";

interface LayoutLoginProps {
    children: React.ReactNode;
}

export const LayoutLogin: React.FC<LayoutLoginProps> = ({ children }) => {
    return (
        <div className="relative flex w-full h-screen overflow-hidden">
            <div
                className="absolute left-0 top-0 h-full w-full md:w-[40%] bg-gray-50 shadow-lg flex items-center justify-center md:rounded-r-[40px]"
                style={{
                    right: "50px",
                    zIndex: 10,
                }}
            >
                <div className="flex flex-col items-center justify-center h-full w-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">
                    {children}
                </div>
            </div>

            <div className="hidden md:flex w-full h-screen">
                <Image
                    src={coletaDeLeite}
                    alt="Mulher segurando um extrator de leite com um bebê de fundo"
                    fill
                    className="object-cover h-full w-full"
                />
            </div>
        </div>
    );
};

export default LayoutLogin;
