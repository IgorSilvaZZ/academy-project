import { useState, ReactNode, createContext } from "react";
import { useSnackbar } from "notistack";
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

  const { enqueueSnackbar } = useSnackbar();

  const getDataValidationStep = (
    stepName: "stepOne" | "stepTwo" | "stepThree" | "stepFour",
    registerData: IAcademy
  ): PartialAcademyProps => {
    const stepsData = {
      stepOne: {
        name: registerData.name,
        telephoneNumber: registerData.telephoneNumber,
        email: registerData.email,
        password: registerData.password,
      },
      stepTwo: {
        address: registerData.address,
        city: registerData.city,
        neighborhood: registerData.neighborhood,
        number: registerData.number,
        postalCode: registerData.postalCode,
      },
      stepThree: {
        description: registerData.description,
      },
      stepFour: {
        openingTime: registerData.openingTime,
        closingTime: registerData.closingTime,
      },
    };

    return stepsData[stepName];
  };

  function validateSchema(
    stepSchema: Yup.Schema,
    stepData: PartialAcademyProps
  ) {
    stepSchema
      .validate(stepData, { abortEarly: false })
      .then(() => {
        setStep((prevState) => prevState + 1);
      })
      .catch((error) => {
        if (error instanceof Yup.ValidationError) {
          const [firstError] = error.errors;

          enqueueSnackbar(firstError, {
            variant: "error",
            autoHideDuration: 2000,
          });
        }
      });
  }

  async function validationStepOne() {
    const stepOneSchema = Yup.object({
      name: Yup.string().required("Preecha o nome!!"),
      telephoneNumber: Yup.string().required("Preencha o telefone!!"),
      email: Yup.string()
        .email("Email invalido!!")
        .required("Preencha o email!!"),
      password: Yup.string().required("Preencha a senha!!"),
    });

    const stepOneData = getDataValidationStep("stepOne", registerForm);

    validateSchema(stepOneSchema, stepOneData);
  }

  async function validationStepTwo() {
    const stepTwoSchema = Yup.object({
      address: Yup.string().required("Preecha o endereço!!"),
      city: Yup.string().required("Preencha a cidade!!"),
      neighborhood: Yup.string().required("Preencha o bairro!!"),
      number: Yup.string().required("Preencha o numero!!"),
      postalCode: Yup.string().required("Preencha o cep!!"),
    });

    const stepTwoData = getDataValidationStep("stepTwo", registerForm);

    validateSchema(stepTwoSchema, stepTwoData);
  }

  async function validationStepThree() {
    const stepThreeSchema = Yup.object({
      description: Yup.string()
        .min(10, "Descrição deve ter no minimo 10 caracteres")
        .max(300, "Descrição teve o limite de 300 caracteres excedido")
        .required("Preencha a descrição"),
    });

    const stepThreeData = getDataValidationStep("stepThree", registerForm);

    validateSchema(stepThreeSchema, stepThreeData);
  }

  async function advancedStep() {
    if (step === 1) {
      await validationStepOne();
    } else if (step === 2) {
      await validationStepTwo();
    } else if (step === 3) {
      await validationStepThree();
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
