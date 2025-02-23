'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaEyeSlash, FaEye } from 'react-icons/fa';
import logo from '../../public/logo.png';
import { LayoutLogin } from '@/components/LayoutLogin';
import { Routes } from '@/routes';
import { MainContainer } from './components/main-container';
import { FormContainer } from './components/form-container';
import { FormActions } from './components/form-actions';
import { CheckboxLabel } from './components/checkbox-label';
import { LinkLabel } from './components/link-label';
import { ButtonGroup } from './components/button-group';
import { AnchorButton } from './components/anchor-button';
import { PrimaryButton } from './components/primary-button';
import { SocialLoginSection } from './components/social-login-section';
import { SocialButton } from './components/social-button';
import AlertError from './components/alert-error';
import { InputText } from './components/input-text';


export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      console.log(result);
      setError('Credenciais inválidas. Por favor, tente novamente.');
    } else {
      router.push('/workspace');
    }
  }

  return (
    <LayoutLogin>
      <MainContainer> 
        <Image src={logo} alt="Logo do Doama" className="object-cover h-auto w-32 mb-6" />

        <FormContainer onSubmit={handleSubmit}>
          <InputText name="username" placeholder="Email" required />
          <InputPassword name="password" placeholder="Senha" required />

          <FormActions>
            <CheckboxLabel> Lembrar-me </CheckboxLabel>
            <LinkLabel href="/esqueci-senha">Esqueci minha senha</LinkLabel>
          </FormActions>

          <ButtonGroup>
            <AnchorButton href={Routes.Cadastro} text="Registrar-se" outline success />
            <PrimaryButton> Entrar </PrimaryButton>
          </ButtonGroup>
        </FormContainer>

        <SocialLoginSection>
          <SocialButton onClick={() => signIn('github')} > <FaGithub /> </SocialButton>
          <SocialButton onClick={() => signIn('email')} > <FaEnvelope /> </SocialButton>
          <SocialButton onClick={() => signIn('facebook')} > <FaFacebook /> </SocialButton>
          <SocialButton onClick={() => signIn('instagram')} > <FaInstagram /> </SocialButton>
        </SocialLoginSection>

        {error && <AlertError> {error} </AlertError>}
      </MainContainer>
    </LayoutLogin>
  );
}


/* 
  InputPassword - Campo de Senha
  Reutilizável para inputs de senha
*/
const InputPassword = ({
  name,
  placeholder,
  required,
}: {
  name: string;
  placeholder: string;
  required?: boolean;
}) => (
  <input
    type="password"
    name={name}
    placeholder={placeholder}
    className="input input-bordered w-full mt-3"
    required={required}
  />
);

/* 
  FormActions - Ações do Formulário
  Agrupa checkbox e link de "Esqueci minha senha"
*/

/* 
  CheckboxLabel - Checkbox com Label
  Checkbox reutilizável com label customizável
*/


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder: string;
}

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibilidadeSenha = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full mt-3">
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input input-bordered w-full  placeholder-opacity-10 text-gray-700"
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={toggleVisibilidadeSenha}
          className="absolute top-0 bottom-0 right-0 pr-3 flex items-center text-gray-500"
        >
          {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
        </button>
      )}
    </div>
  );
};
