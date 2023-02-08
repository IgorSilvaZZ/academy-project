import threeStepImage from "../../../assets/step-three-image.png";

export const StepThree = () => {
  return (
    <>
      <div className='w-[600px] h-full flex flex-col justify-around items-center bg-zinc-700 rounded-l-lg'>
        <span className='text-3xl text-white leading-tight font-semibold px-7 py-4'>
          Queremos saber um pouquinho mais sobre você. Com poucas palavras deixe
          uma descrição da sua academia.
        </span>

        <img src={threeStepImage} className='w-[300px]' />
      </div>

      <div className='w-[600px] mx-auto h-full flex flex-col items-center justify-center gap-8'>
        <textarea
          className='h-24 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 resize-none bg-transparent outline-none hover:border-zinc-700'
          placeholder='Deixe aqui uma breve descrição...'
        />

        <button className='p-3 bg-violet-600 text-white font-semibold w-full max-w-md border-none rounded-2xl text-center transition-colors hover:bg-violet-800'>
          Avançar
        </button>
      </div>
    </>
  );
};
