import InputMask from "react-input-mask";

import { useRegister } from "../../../hooks/useRegister";

export const StepOne = () => {
  const { registerForm, handleStateForm } = useRegister();

  return (
    <>
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
