import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import fourStepImage from "../../../assets/step-four-register-image.png";

export const StepFour = () => {
  const daysOfWeek = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
  ];

  return (
    <>
      <div className='w-[600px] h-full flex flex-col justify-around items-center bg-zinc-700 rounded-l-lg'>
        <span className='text-3xl text-white leading-tight font-semibold px-7 py-4'>
          Para finalizar precisamos de informações de funcionamento da sua
          academia!
        </span>

        <img src={fourStepImage} className='w-[300px]' />
      </div>

      <div className='w-[600px] mx-auto h-full flex flex-col items-center justify-center gap-8'>
        <div className='w-full max-w-md flex flex-col gap-1'>
          <span className='text-gray-400 font-semibold text-xs'>
            Hora de abertura
          </span>

          <input
            type='time'
            className='h-14 w-full text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          />
        </div>

        <div className='w-full max-w-md flex flex-col gap-1'>
          <span className='text-gray-400 font-semibold text-xs'>
            Hora de Fechamento
          </span>

          <input
            type='time'
            className='h-14 w-full text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          />
        </div>

        <div className='w-full max-w-md flex flex-col gap-3'>
          <span className='text-gray-400 font-semibold text-xs'>
            Dias de funcionamento
          </span>

          {daysOfWeek.map((day, index) => (
            <Checkbox.Root
              key={index}
              className='flex items-center gap-3 focus:outline-none'
            >
              <div className='h-7 w-7 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-violet-700' />
                </Checkbox.Indicator>
              </div>

              <span className='font-semibold text-xs text-gray-300 leading-tight'>
                {day}
              </span>
            </Checkbox.Root>
          ))}
        </div>

        <button className='p-3 bg-violet-600 text-white font-semibold w-full max-w-md border-none rounded-2xl text-center transition-colors hover:bg-violet-800'>
          Avançar
        </button>
      </div>
    </>
  );
};
