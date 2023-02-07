import { StepOne } from "../components/forms/register/StepOne";
import { StepTwo } from "../components/forms/register/StepTwo";

export const Register = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <main className='w-full max-w-7xl h-full max-h-[650px] rounded-lg bg-zinc-800 flex'>
        {/* <StepOne /> */}
        <StepTwo />
      </main>
    </div>
  );
};
