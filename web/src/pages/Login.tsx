import { SignIn } from "phosphor-react";

import headerImg from "../assets/header-login-image.png";
import loginImg from "../assets/login-image.svg";

export const Login = () => {
  return (
    <div className='w-screen h-screen mx-auto flex items-center justify-around'>
      <div className='w-full max-w-md flex flex-col'>
        <img
          src={headerImg}
          alt='Muscle image header login'
          className='w-[250px] mx-auto'
        />

        <span className='text-gray-300 font-semibold text-4xl mt-10 mb-4'>
          Faça seu Login
        </span>

        <input
          type='text'
          placeholder='Email'
          className='flex-1 my-3 px-4 py-3 outline-none rounded text-gray-300 bg-zinc-800 border border-zinc-600 font-semibold'
        />

        <input
          type='password'
          placeholder='Senha'
          className='flex-1 my-3 px-4 py-3 outline-none rounded text-gray-300 bg-zinc-800 border border-zinc-600 font-semibold'
        />

        <button className='py-3 mb-5 px-10 bg-violet-600 text-white font-semibold rounded transition-colors hover:bg-violet-800'>
          Entrar
        </button>

        <span className='flex items-center gap-2 text-gray-300 font-semibold cursor-pointer'>
          <SignIn size={20} className='text-violet-700' />
          Nao tenho cadastro
        </span>
      </div>
      <img src={loginImg} alt='Login Image' className='w-[550px]' />
    </div>
  );
};