import InputMask from "react-input-mask";

import { useRegister } from "../../../hooks/useRegister";

export const StepTwo = () => {
  const { registerForm, handleStateForm } = useRegister();

  return (
    <>
      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Endereço completo'
        value={registerForm?.address}
        onChange={(e) => handleStateForm("address", e.target.value)}
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Cidade'
        value={registerForm?.city}
        onChange={(e) => handleStateForm("city", e.target.value)}
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Bairro'
        value={registerForm?.neighborhood}
        onChange={(e) => handleStateForm("neighborhood", e.target.value)}
      />

      <div className='flex gap-5 w-full max-w-md'>
        <input
          type='text'
          className='h-14 w-[220px] text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          placeholder='Numero'
          value={registerForm?.number}
          onChange={(e) => handleStateForm("number", e.target.value)}
        />

        <InputMask
          type='text'
          className='h-14 w-[220px] text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          placeholder='Cep'
          mask='99999-999'
          value={registerForm?.postalCode}
          onChange={(e) => handleStateForm("postalCode", e.target.value)}
        />
      </div>
    </>
  );
};
