'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../../public/logo.png';
import './style.css';

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    console.log(username, password);

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    console.log(result)

    // if (result?.error) {
    //   console.log(result?.error)
    //   setError('Credenciais inválidas. Por favor, tente novamente.');
    // } else {
    //   console.log(result);
    //   router.push('/dashboard');
    // }
  }

  return (
    <div className="custom-form w-3/5 flex flex-col items-center justify-center h-full">
      <Image src={logo} alt="Logo do doama" className="object-cover h-auto w-32" />

      <form onSubmit={handleSubmit} className="grid w-full">
        <input type="text" name="username" placeholder="Usuário" className="input input-bordered w-full" />
        <div className="form-control w-full">
          <input type="password" name="password" placeholder="Senha" className="input input-bordered w-full mt-3" />
          <label className="label">
            <span className="label-text-alt">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox h-5 w-5 mr-1" />
                  <span className="label-text-alt">lembrar-me</span>
                </label>
              </div>
            </span>
            <a href="/esqueci-senha">
              <span className="underline label-text-alt">Esqueci minha senha</span>
            </a>
          </label>
        </div>

        <div className="flex justify-between w-full">
          <a className="width-button" href="/login/cadastro-usuario">
            <button type="button" className="btn btn-outline btn-success w-full">
              Registrar-se
            </button>
          </a>
          <button type="submit" className="btn btn-success text-white width-button">
            Entrar
          </button>
        </div>
      </form>

      <div className="w-full">
        <div className="divider">Ou fazer login com</div>
        <div className="flex items-center justify-center space-x-4">
          <FaEnvelope className="h-7 w-7" />
          <FaFacebook className="h-7 w-7" />
          <FaInstagram className="h-7 w-7" />
        </div>
      </div>

      {error && (
        <div className="relative inset-0 mb-12 flex items-center justify-center width-alert">
             <div className="alert alert-error width-alert" style={{ zIndex: 9999 }}>
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
               <span>{error}</span>
             </div>
           </div>
      )}
    </div>
  );
}

// app/login/Login.tsx
// 'use client';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { FormEvent, useState } from 'react';
// import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
// import { signIn } from 'next-auth/react';
// import logo from '../../../public/logo.png';
// import './style.css';

// export default function Login() {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setError(null);

//     const formData = new FormData(event.currentTarget);
//     const username = formData.get('username') as string;
//     const password = formData.get('password') as string;

//     const result = await signIn('credentials', {
//       redirect: false,
//       username,
//       password,
//     });

//     if (result?.error) {
//       setError('Credenciais inválidas. Por favor, tente novamente.');
//     } else {
//       console.log(result);
//       router.push('/dashboard');
//     }
//   }

//   return (
//     <div className="custom-form w-3/5 flex flex-col items-center justify-center h-full">
//       <Image src={logo} alt="Logo do Doama" className="object-cover h-auto w-32" />

//       <form onSubmit={handleSubmit} className="grid w-full gap-4">
//         <input
//           type="text"
//           name="username"
//           placeholder="Usuário"
//           className="input input-bordered w-full"
//           required
//         />
//         <div className="form-control w-full">
//           <input
//             type="password"
//             name="password"
//             placeholder="Senha"
//             className="input input-bordered w-full mt-3"
//             required
//           />
//           <div className="flex justify-between mt-2">
//             <label className="label cursor-pointer">
//               <input type="checkbox" className="checkbox h-5 w-5 mr-1" />
//               <span className="label-text-alt">Lembrar-me</span>
//             </label>
//             <a href="/esqueci-senha" className="underline label-text-alt">
//               Esqueci minha senha
//             </a>
//           </div>
//         </div>

//         <div className="flex justify-between w-full gap-4">
//           <a href="/login/cadastro-usuario" className="w-full">
//             <button type="button" className="btn btn-outline btn-success w-full">
//               Registrar-se
//             </button>
//           </a>
//           <button type="submit" className="btn btn-success text-white w-full">
//             Entrar
//           </button>
//         </div>
//       </form>

//       <div className="w-full mt-4">
//         <div className="divider">Ou fazer login com</div>
//         <div className="flex items-center justify-center space-x-4">
//           <FaEnvelope className="h-7 w-7" />
//           <FaFacebook className="h-7 w-7" />
//           <FaInstagram className="h-7 w-7" />
//         </div>
//       </div>

//       {error && (
//         <div className="relative inset-0 mb-12 flex items-center justify-center width-alert">
//           <div className="alert alert-error width-alert" style={{ zIndex: 9999 }}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="stroke-current shrink-0 h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <span>{error}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
