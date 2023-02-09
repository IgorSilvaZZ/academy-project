import { useState } from "react";

import { RegisterForm } from "../components/forms/register";

export const Register = () => {
  const [step, setStep] = useState(1);

  function advancedStep() {
    setStep((prevState) => prevState + 1);
  }

  function backStep() {
    setStep((prevState) => prevState - 1);
  }

  function submitForm() {
    console.log("Submit!");
  }

  const stepsTexts = [
    "Precisamos que você preencha os campos ao lado para começar!!",
    "Queremos saber da onde você é! Coloque todas as informações ao lado da sua localização.",
    "Queremos saber um pouquinho mais sobre você. Com poucas palavras deixe uma descrição da sua academia.",
    "Para finalizar precisamos de informações de funcionamento da sua academia!",
  ];

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <main className='w-full max-w-7xl h-full max-h-[650px] rounded-lg bg-zinc-800 flex'>
        <RegisterForm
          step={step}
          textStep={stepsTexts[step - 1]}
          backButton={step > 1}
          advanceStep={advancedStep}
          backStep={backStep}
          submitForm={submitForm}
        />
      </main>
    </div>
  );
};
