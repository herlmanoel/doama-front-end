// "use client";

// import React, { useState, FormEvent } from "react";
// import { MdAccountCircle } from "react-icons/md";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import iconeImg from "../../public/icone.png";
// import { LayoutLogin } from "@/components/LayoutLogin";

// const Cadastro = () => {
//   const [respCadastro, setRespCadastro] = useState<{
//     status: boolean;
//     mensagem: string;
//   } | null>(null);
//   const router = useRouter();

//   const handleCadastro = async (event: FormEvent) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const formData = new FormData(form);

//     const response = await Cadastrar(formData);
//     setRespCadastro(response);
//     if (response.status) {
//       ConfirmarCadastro();
//     }
//   };

//   return (
//     <LayoutLogin>
//       <div className="relative w-full">
//         <div className="absolute" style={{ marginTop: "-95%", marginLeft: "60px" }}>
//           <Image src={iconeImg} alt="Logo do doama" width={40} height={40} className="object-cover h-auto w-10" />
//         </div>

//         <div className="absolute flex flex-col items-center justify-center h-full w-full">
//           <div className="flex items-center text-accent w-[80%]">
//             <MdAccountCircle className="h-9 w-9" />
//             <h1 className="ml-2 text-xl">Cadastro de nova conta</h1>
//           </div>

//           <form className="w-[80%]" onSubmit={handleCadastro}>
//             <div className="flex justify-between mt-6 w-full">
//               <input
//                 type="text"
//                 name="nome"
//                 placeholder="Nome"
//                 className="input mr-3 input-bordered w-full"
//               />
//               <input
//                 type="text"
//                 name="sobrenome"
//                 placeholder="Sobrenome"
//                 className="input input-bordered w-full"
//               />
//             </div>

//             <div className="flex justify-between mt-6 w-full">
//               <input
//                 type="text"
//                 name="cpf"
//                 placeholder="CPF"
//                 className="input mr-3 input-bordered w-full"
//               />
//               <input
//                 type="text"
//                 name="telefone"
//                 placeholder="Telefone"
//                 className="input input-bordered w-full"
//               />
//             </div>

//             <input
//               type="text"
//               name="email"
//               placeholder="E-mail"
//               className="input mt-6 input-bordered w-full"
//             />

//             <select className="select select-bordered w-full mt-6 text-gray-500" name="cargo">
//               <option disabled selected>
//                 Cargo
//               </option>
//               <option>Administrativo</option>
//               <option>Técnico(a) de enfermagem</option>
//               <option>Enfermeiro(a)</option>
//               <option>Médico(a)</option>
//               <option>Outro(a)</option>
//             </select>

//             <div className="flex justify-between w-full mt-6">
//               <input
//                 type="password"
//                 name="senha"
//                 placeholder="Senha"
//                 className="input mr-3 input-bordered w-full"
//               />
//               <input
//                 type="password"
//                 name="confSenha"
//                 placeholder="Confirmar Senha"
//                 className="input input-bordered w-full"
//               />
//             </div>

//             <div className="form-control w-full mt-6">
//               <label className="label cursor-pointer">
//                 <input type="checkbox" name="termosCondicoes" className="checkbox h-5 w-5 mr-1" />
//                 <span className="label-text-alt ml-1 text-gray-600">
//                   Eu concordo com os termos e condições
//                 </span>
//               </label>
//             </div>

//             <div className="flex space-x-3 w-full mt-6">
//               <button
//                 type="button"
//                 onClick={() => router.push("/login")}
//                 className="btn btn-outline btn-success w-1/2"
//               >
//                 Voltar
//               </button>
//               <button type="submit" className="btn btn-success text-white w-1/2">
//                 Cadastrar
//               </button>
//             </div>
//           </form>

//           {respCadastro && !respCadastro.status && (
//             <div className="relative mt-12 inset-0 flex items-center justify-center w-[70%]">
//               <div className="alert alert-error" style={{ zIndex: 9999 }}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="stroke-current shrink-0 h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <span>{respCadastro.mensagem}</span>
//               </div>
//             </div>
//           )}

//           {respCadastro && respCadastro.status && (
//             <div className="relative mt-12 inset-0 flex items-center justify-center w-[70%]">
//               <div className="alert alert-success">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="stroke-current shrink-0 h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <span>{respCadastro.mensagem}</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </LayoutLogin>
//   );
// };

// // Funções de cadastro e confirmação (substitua com a lógica do backend)
// async function Cadastrar(data: FormData): Promise<{ status: boolean; mensagem: string }> {
//   return { status: false, mensagem: "Erro ao cadastrar" };
// }

// function ConfirmarCadastro() {
//   alert("Cadastro confirmado!");
// }

"use client";

import React, { useState, FormEvent } from "react";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";

import iconeImg from "../../public/icone.png";
import { LayoutLogin } from "@/components/LayoutLogin";

const Cadastro = () => {
  const [respCadastro, setRespCadastro] = useState<{
    status: boolean;
    mensagem: string;
  } | null>(null);
  const router = useRouter();

  const handleCadastro = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await Cadastrar(formData);
    setRespCadastro(response);
    if (response.status) {
      ConfirmarCadastro();
    }
  };

  return (
    <LayoutLogin>
      <Image
        src={iconeImg}
        alt="Logo do Doama"
        width={40} 
        height={40}
        className="absolute top-0 left-0 object-cover w-8 h-auto m-4" 
      />
  <div className="relative w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full w-full ">
          <div className="flex items-center text-accent w-full mb-6">
            <MdAccountCircle className="h-9 w-9" />
            <h1 className="ml-2 text-xl">Cadastro de nova conta</h1>
          </div>

          <form className="w-full" onSubmit={handleCadastro}>
            <div className="flex flex-col md:flex-row justify-between mt-6 w-full gap-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="sobrenome"
                placeholder="Sobrenome"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-6 w-full gap-4">
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                className="input input-bordered w-full"
              />
            </div>

            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="input mt-6 input-bordered w-full"
            />

            <select className="select select-bordered w-full mt-6 text-gray-500" name="cargo">
              <option disabled selected>
                Cargo
              </option>
              <option>Administrativo</option>
              <option>Técnico(a) de enfermagem</option>
              <option>Enfermeiro(a)</option>
              <option>Médico(a)</option>
              <option>Outro(a)</option>
            </select>

            <div className="flex flex-col md:flex-row justify-between w-full mt-6 gap-4">
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="input input-bordered w-full"
              />
              <input
                type="password"
                name="confSenha"
                placeholder="Confirmar Senha"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full mt-6">
              <label className="label cursor-pointer">
                <input type="checkbox" name="termosCondicoes" className="checkbox h-5 w-5 mr-1" />
                <span className="label-text-alt ml-1 text-gray-600">
                  Eu concordo com os termos e condições
                </span>
              </label>
            </div>

            <div className="flex space-x-3 w-full mt-6">
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="btn btn-outline btn-success w-1/2"
              >
                Voltar
              </button>
              <button type="submit" className="btn btn-success text-white w-1/2">
                Cadastrar
              </button>
            </div>
          </form>

          {respCadastro && !respCadastro.status && (
            <div className="relative mt-12 inset-0 flex items-center justify-center w-[70%]">
              <div className="alert alert-error" style={{ zIndex: 9999 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{respCadastro.mensagem}</span>
              </div>
            </div>
          )}

          {respCadastro && respCadastro.status && (
            <div className="relative mt-12 inset-0 flex items-center justify-center w-[70%]">
              <div className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{respCadastro.mensagem}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutLogin>
  );
};

// Funções de cadastro e confirmação (substitua com a lógica do backend)
async function Cadastrar(data: FormData): Promise<{ status: boolean; mensagem: string }> {
  return { status: false, mensagem: "Erro ao cadastrar" };
}

function ConfirmarCadastro() {
  alert("Cadastro confirmado!");
}

export default Cadastro;
