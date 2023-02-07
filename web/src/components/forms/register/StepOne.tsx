import firstStepImage from "../../../assets/first-step-image.png";

export const StepOne = () => {
  return (
    <>
      <div className='w-[600px] h-full flex flex-col justify-around items-center bg-zinc-700 rounded-l-lg'>
        <span className='text-4xl text-white leading-tight font-semibold p-5'>
          Precisamos que você, preencha os campos ao lado para começar!!
        </span>

        <img src={firstStepImage} className='w-[300px]' />
      </div>

      <div className='w-[600px] mx-auto h-full flex flex-col items-center justify-center gap-8'>
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

        <button className='p-3 bg-violet-600 text-white font-semibold w-full max-w-md border-none rounded-2xl text-center transition-colors hover:bg-violet-800'>
          Avançar
        </button>
      </div>
    </>
  );
};
