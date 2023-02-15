import { Link } from "react-router-dom";

import { SignIn, ArrowLeft } from "phosphor-react";

import loginImg from "../assets/login-image.png";

export const Login = () => {
  return (
    <div className='w-screen h-screen mx-auto flex items-center justify-around'>
      <div className='w-full max-w-md flex flex-col'>
        <Link to='/' className='text-gray-300'>
          <ArrowLeft size={25} />
        </Link>

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

        <Link
          to='/registerAcademy'
          className='flex items-center gap-2 text-gray-300 font-semibold cursor-pointer transition-colors hover:text-gray-500'
        >
          <SignIn size={20} className='text-violet-700' />
          Nao tenho cadastro
        </Link>
      </div>
      <img src={loginImg} alt='Login Image' className='w-[400px]' />
    </div>
  );
};
