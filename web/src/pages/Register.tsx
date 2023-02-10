import { RegisterForm } from "../components/forms/register";
import { RegisterContextProvider } from "../contexts/RegisterContext";

export const Register = () => {
  return (
    <RegisterContextProvider>
      <div className='w-screen h-screen flex items-center justify-center'>
        <main className='w-full max-w-7xl h-full max-h-[650px] rounded-lg bg-zinc-800 flex'>
          <RegisterForm />
        </main>
      </div>
    </RegisterContextProvider>
  );
};
