import secundStepImage from "../../../assets/step-two-register-image.png";

export const StepTwo = () => {
  return (
    <>
      <div className='w-[600px] h-full flex flex-col justify-around items-center bg-zinc-700 rounded-l-lg'>
        <span className='text-4xl text-white leading-tight font-semibold p-5'>
          Queremos saber da onde você é! Coloque todas as informações ao lado da
          sua localização.
        </span>

        <img src={secundStepImage} className='w-[300px]' />
      </div>

      <div className='w-[600px] mx-auto h-full flex flex-col items-center justify-center gap-8'>
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

        <button className='p-3 bg-violet-600 text-white font-semibold w-full max-w-md border-none rounded-2xl text-center transition-colors hover:bg-violet-800'>
          Avançar
        </button>
      </div>
    </>
  );
};
