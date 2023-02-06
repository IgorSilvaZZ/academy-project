import firstStepImage from "../assets/first-step-image.png";

export const Register = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <main className='w-full max-w-7xl h-full max-h-[650px] rounded-lg bg-zinc-800 flex'>
        <div className='w-[600px] h-full flex flex-col justify-around items-center bg-zinc-700 rounded-l-lg'>
          <span className='text-4xl text-white leading-tight font-semibold p-5'>
            Precisamos que você, preencha os campos ao lado para começar!!
          </span>

          <img src={firstStepImage} className='w-[300px]' />
        </div>

        <div className='w-[600px] mx-auto h-full flex flex-col items-center justify-center gap-2 border'>
          <input
            type='text'
            className='h-14 w-full max-w-md p-3 text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none'
            placeholder='Nome da Academia'
          />
        </div>
      </main>
    </div>
  );
};
