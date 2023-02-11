import { useState, ReactNode, createContext } from "react";
import * as Yup from "yup";
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
  postalCode: string;
}

type PartialAcademyProps = Partial<IAcademy>;

interface RegisterContextProps {
  children: ReactNode;
}

export interface IRegisterContext {
  step: number;
  registerForm?: IAcademy;
  advancedStep: () => void;
  backStep: () => void;
  handleStateForm: (name: string, value: number | string) => void;
  submitForm: () => void;
}

export const RegisterContext = createContext({} as IRegisterContext);

export const RegisterContextProvider = ({ children }: RegisterContextProps) => {
  const [registerForm, setRegisterForm] = useState<IAcademy>({} as IAcademy);
  const [step, setStep] = useState(1);

  async function validationStepOne() {
    const stepOneSchema = Yup.object({
      name: Yup.string().required("Preecha o nome!!"),
      telephoneNumber: Yup.string().required("Preencha o telefone!!"),
      email: Yup.string()
        .email("Email invalido!!")
        .required("Preencha o email!!"),
      password: Yup.string().required("Preencha a senha!!"),
    });

    const stepOneData = {
      name: registerForm.name,
      telephoneNumber: registerForm.telephoneNumber,
      email: registerForm.email,
      password: registerForm.password,
    };

    stepOneSchema.validate(stepOneData, { abortEarly: false }).then(() => {
      setStep((prevState) => prevState + 1);
    });
  }

  function advancedStep() {
    try {
      if (step === 1) {
        validationStepOne();
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.map(({ message }) => {
          console.log(message);
        });
      }
    }
  }

  function backStep() {
    setStep((prevState) => prevState - 1);
  }

  function submitForm() {
    console.log(registerForm);
  }

  function handleStateForm(name: string, value: number | string) {
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  }

  return (
    <RegisterContext.Provider
      value={{
        step: step,
        registerForm,
        advancedStep: advancedStep,
        backStep: backStep,
        handleStateForm: handleStateForm,
        submitForm,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
