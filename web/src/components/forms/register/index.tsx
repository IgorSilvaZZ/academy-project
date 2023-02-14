import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepFour } from "./StepFour";
import { StepThree } from "./StepThree";

import { useRegister } from "../../../hooks/useRegister";

import stepImageOne from "../../../assets/first-step-image.png";
import stepImageTwo from "../../../assets/step-two-register-image.png";
import stepImageThree from "../../../assets/step-three-image.png";
import stepImageFour from "../../../assets/step-four-register-image.png";

export const RegisterForm = () => {
  const { step, advancedStep, backStep } = useRegister();

  const isLastStep = step === 4;

  const stepsTexts = [
    "Precisamos que você preencha os campos ao lado para começar!!",
    "Queremos saber da onde você é! Coloque todas as informações ao lado da sua localização.",
    "Queremos saber um pouquinho mais sobre você. Com poucas palavras deixe uma descrição da sua academia.",
    "Para finalizar precisamos de informações de funcionamento da sua academia!",
  ];

  return (
    <>
      <div className='w-[600px] h-full flex flex-col justify-around items-center bg-zinc-700 rounded-l-lg'>
        <span className='text-3xl text-white leading-tight font-semibold px-7 py-4'>
          {stepsTexts[step - 1]}
        </span>

        {step === 1 && <img src={stepImageOne} className='w-[300px]' />}

        {step === 2 && <img src={stepImageTwo} className='w-[300px]' />}

        {step === 3 && <img src={stepImageThree} className='w-[300px]' />}

        {step === 4 && <img src={stepImageFour} className='w-[300px]' />}
      </div>

      <div className='w-[600px] mx-auto h-full flex flex-col items-center justify-center gap-8'>
        {step === 1 && <StepOne />}

        {step === 2 && <StepTwo />}

        {step === 3 && <StepThree />}

        {step === 4 && <StepFour />}

        <div className='w-full max-w-md flex gap-4 items-center justify-end'>
          {step > 1 && (
            <button
              className='p-3 bg-violet-600 w-[240px] max-w-sm text-white font-semibold border-none rounded-2xl text-center transition-colors hover:bg-violet-800'
              onClick={backStep}
            >
              Voltar
            </button>
          )}

          <button
            className='p-3 bg-violet-600 w-[240px] text-white font-semibold border-none rounded-2xl text-center transition-colors hover:bg-violet-800'
            onClick={advancedStep}
          >
            {isLastStep ? "Finalizar" : "Avançar"}
          </button>
        </div>
      </div>
    </>
  );
};
