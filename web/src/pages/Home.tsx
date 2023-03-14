import { Link } from "react-router-dom";

import ladingImg from "../assets/lading-page-image.png";

export const Home = () => {
  return (
    <div className='w-screen h-screen mx-auto flex items-center justify-around'>
      <main className='w-full max-w-xl flex flex-col gap-3'>
        <h1 className='mt-14 mb-5 text-white text-6xl font-bold leading-tight'>
          Procure a academia mais proxima de você!!
        </h1>

        <p className='text-gray-300 text-base font-medium leading-relaxed'>
          Encontre academias mais perto de você, use alguns dos filtros
          disponibilizados abaixo ou clique no botão abaixo.
        </p>

        <button className='p-2 rounded-xl mt-4 text-white font-semibold bg-violet-600 max-w-[200px] transition-colors hover:bg-violet-800'>
          Começa a sua busca!
        </button>

        <div className='flex items-center gap-3 h-[120px] p-5 mt-8 rounded-lg bg-zinc-900'>
          <div className='flex flex-col gap-2 max-w-[170px]'>
            <input
              type='text'
              placeholder='Estado'
              className='p-3 outline-none rounded-md text-gray-300 font-semibold bg-zinc-800'
            />
          </div>

          <div className='w-px h-10 bg-violet-600'></div>

          <div className='flex flex-col gap-2 max-w-[170px]'>
            <input
              type='text'
              placeholder='Cidade'
              className='p-3 outline-none rounded-md text-gray-300 font-semibold bg-zinc-800'
            />
          </div>

          <button className='py-3 px-9 bg-violet-600 text-white font-semibold rounded-lg uppercase transition-colors hover:bg-violet-800'>
            Pesquisar
          </button>
        </div>
      </main>

      <img src={ladingImg} alt='Lading Image' className='w-[350px]' />
    </div>
  );
};
