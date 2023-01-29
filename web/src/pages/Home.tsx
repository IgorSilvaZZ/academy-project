import ladingImg from "../assets/lading-page-image.png";

export const Home = () => {
  return (
    <div className='w-screen h-screen mx-auto flex items-center justify-around'>
      <main className='w-full max-w-lg flex flex-col gap-3'>
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Procure a academia mais proxima de você!!
        </h1>

        <p className='text-gray-300 text-sm leading-relaxed'>
          Encontre academias mais perto de você, basta procurar pelo seu estado
          e encontraremos a academias disponiveis. Encontre a academia que mais
          se encaixa com teu estilo de vida e com teu foco.
        </p>

        <div className='flex items-center gap-1 mb-5'>
          <input
            type='text'
            placeholder='Qual seu estado?'
            className='flex-1 px-4 py-3 outline-none rounded text-gray-300 bg-zinc-800 border border-zinc-600 font-semibold'
          />
          <button className='px-4 py-3 bg-violet-600 text-white font-semibold rounded uppercase transition-colors hover:bg-violet-800'>
            Pesquisar
          </button>
        </div>

        <div className='flex items-center justify-center'>
          <p className='text-base text-gray-300 font-semibold'>
            Para Academias:
          </p>
        </div>

        <div className='pt-10 border-t border-violet-500 flex justify-between items-center text-gray-100'>
          <div className='flex flex-col gap-3 leading-relaxed items-center justify-center w-80'>
            <button className='py-2 px-10 bg-violet-600 text-white font-semibold rounded transition-colors hover:bg-violet-800'>
              Logar-se
            </button>
          </div>

          <div className='w-px h-10 bg-violet-500'></div>

          <div className='flex flex-col gap-3 items-center justify-center w-80'>
            <button className='py-2 px-10 bg-violet-600 text-white font-semibold rounded transition-colors hover:bg-violet-800'>
              Registrar-se
            </button>
          </div>
        </div>
      </main>

      <img src={ladingImg} alt='Lading Image' className='w-[350px]' />
    </div>
  );
};
