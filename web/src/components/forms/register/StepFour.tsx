import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import { useRegister } from "../../../hooks/useRegister";

export const StepFour = () => {
  const { registerForm, handleStateForm } = useRegister();

  const daysOfWeek = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
  ];

  function handleToggleWeekDay(weekDaySelect: string) {
    const weekDays = registerForm!.daysOfWeek ? registerForm!.daysOfWeek : [];

    if (weekDays.includes(weekDaySelect)) {
      const weekDaysWithRemovedOne = weekDays.filter(
        (day) => day !== weekDaySelect
      );

      handleStateForm("daysOfWeek", weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDaySelect];

      handleStateForm("daysOfWeek", weekDaysWithAddedOne);
    }
  }

  return (
    <>
      <div className='w-full max-w-md flex flex-col gap-1'>
        <span className='text-gray-400 font-semibold text-xs'>
          Hora de abertura
        </span>

        <input
          type='time'
          className='h-14 w-full text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          value={registerForm?.openingTime}
          onChange={(e) => handleStateForm("openingTime", e.target.value)}
        />
      </div>

      <div className='w-full max-w-md flex flex-col gap-1'>
        <span className='text-gray-400 font-semibold text-xs'>
          Hora de Fechamento
        </span>

        <input
          type='time'
          className='h-14 w-full text-gray-300 font-semibold border-b border-b-zinc-500 bg-transparent outline-none hover:border-zinc-700'
          value={registerForm?.closingTime}
          onChange={(e) => handleStateForm("closingTime", e.target.value)}
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
            onCheckedChange={() => handleToggleWeekDay(day)}
            checked={registerForm?.daysOfWeek?.includes(day)}
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
    </>
  );
};
