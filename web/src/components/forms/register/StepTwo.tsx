export const StepTwo = () => {
  return (
    <>
      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Endereço completo'
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Cidade'
      />

      <input
        type='text'
        className='h-14 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
        placeholder='Bairro'
      />

      <div className='flex gap-5 w-full max-w-md'>
        <input
          type='text'
          className='h-14 w-[220px] text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          placeholder='Numero'
        />

        <input
          type='text'
          className='h-14 w-[220px] text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          placeholder='Cep'
        />
      </div>
    </>
  );
};
