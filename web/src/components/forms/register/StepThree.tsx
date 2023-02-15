import { useRegister } from "../../../hooks/useRegister";

export const StepThree = () => {
  const { registerForm, handleStateForm } = useRegister();

  return (
    <>
      <textarea
        className='h-24 w-full max-w-md text-gray-300 font-semibold border-b border-b-zinc-500 resize-none bg-transparent outline-none hover:border-zinc-700'
        placeholder='Deixe aqui uma breve descrição...'
        value={registerForm?.description}
        onChange={(e) => handleStateForm("description", e.target.value)}
      />
    </>
  );
};
