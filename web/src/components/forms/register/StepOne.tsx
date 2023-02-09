export const StepOne = () => {
  return (
    <>
      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Nome da Academia'
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Telefone'
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='E-mail'
      />

      <input
        type='password'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Confirmação de senha'
      />
    </>
  );
};
