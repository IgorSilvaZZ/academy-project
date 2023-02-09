import { useState, ReactNode, createContext } from "react";

interface IAcademy {
  name: string;
  address: string;
  city: string;
  email: string;
  daysOfWeek: string;
  description: string;
  telephoneNumber: string;
  closingTime: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  number: string;
  openingTime: string;
  password: string;
  plans?: [
    {
      planId: string;
      name: string;
      description: string;
      value: number;
    }
  ];
  postalCode: string;
}

type PartialAcademyProps = Partial<IAcademy>;

interface RegisterContextProps {
  children: ReactNode;
}

export interface IRegisterContext {
  registerForm?: IAcademy;
  setRegisterFormState: (registerForm: PartialAcademyProps) => void;
  submitForm: () => void;
}

export const RegisterContext = createContext({} as IRegisterContext);

export const RegisterContextProvider = ({ children }: RegisterContextProps) => {
  const [registerForm, setRegisterForm] = useState<IAcademy>({} as IAcademy);

  function submitForm() {
    console.log(registerForm);
  }

  function setRegisterFormState(data: PartialAcademyProps) {
    setRegisterForm(data as IAcademy);
  }

  return (
    <RegisterContext.Provider
      value={{
        registerForm,
        setRegisterFormState,
        submitForm,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
