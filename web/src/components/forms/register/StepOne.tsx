import { useNavigate } from "react-router-dom";

import InputMask from "react-input-mask";
import { ArrowLeft } from "phosphor-react";

import { useRegister } from "../../../hooks/useRegister";

export const StepOne = () => {
  const navigate = useNavigate();

  const { registerForm, handleStateForm } = useRegister();

  return (
    <>
      <div className='w-full'>
        <button
          className='text-gray-300 bg-transparent border-none outline-none'
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={25} />
        </button>
      </div>

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Nome da Academia'
        value={registerForm?.name}
        onChange={(e) => handleStateForm("name", e.target.value)}
      />

      <InputMask
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Telefone'
        value={registerForm?.telephoneNumber}
        mask='(99) 99999-9999'
        onChange={(e) => handleStateForm("telephoneNumber", e.target.value)}
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='E-mail'
        value={registerForm?.email}
        onChange={(e) => handleStateForm("email", e.target.value)}
      />

      <input
        type='password'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Senha'
        value={registerForm?.password}
        onChange={(e) => handleStateForm("password", e.target.value)}
      />
    </>
  );
};
