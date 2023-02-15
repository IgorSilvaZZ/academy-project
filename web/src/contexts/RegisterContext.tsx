import { useState, ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { api, geocodingApi } from "../lib/axios";
import {
  getForwardGeocoding,
  IGeocodingApi,
} from "../services/geoCodingService";

interface IAcademy {
  name: string;
  address: string;
  city: string;
  state: string;
  email: string;
  daysOfWeek: string[];
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
  handleStateForm: (name: string, value: number | string | string[]) => void;
  submitForm: () => void;
}

export const RegisterContext = createContext({} as IRegisterContext);

export const RegisterContextProvider = ({ children }: RegisterContextProps) => {
  const navigateRegisterContext = useNavigate();

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
        state: registerData.state,
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
        daysOfWeek: registerData.daysOfWeek,
      },
    };

    return stepsData[stepName];
  };

  async function getLatitudeAndLatitude({
    street,
    city,
    state,
    country,
    postalCode,
  }: IGeocodingApi) {
    try {
      const data = await getForwardGeocoding({
        street,
        city,
        state,
        country,
        postalCode,
      });

      setRegisterForm({
        ...registerForm,
        latitude: data.lat,
        longitude: data.lon,
      });

      setStep((prevState) => prevState + 1);
    } catch (error) {
      console.log(error);

      toast.error("Houve algum erro ao coletar informações do endereço!!");
    }
  }

  function validateSchema(
    stepSchema: Yup.Schema,
    stepData: PartialAcademyProps
  ) {
    stepSchema
      .validate(stepData, { abortEarly: false })
      .then(async () => {
        if (step >= 1 && step <= 3) {
          if (step === 2) {
            await getLatitudeAndLatitude(stepData);
          } else {
            setStep((prevState) => prevState + 1);
          }
        } else {
          submitForm();
        }
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
      state: Yup.string().required("Preencha o estado!!"),
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
        .min(10, "Descrição deve ter no minimo 10 caracteres!!")
        .max(300, "Descrição teve o limite de 300 caracteres excedido!!")
        .required("Preencha a descrição!!"),
    });

    const stepThreeData = getDataValidationStep("stepThree", registerForm);

    validateSchema(stepThreeSchema, stepThreeData);
  }

  async function validationStepFour() {
    const stepFourSchema = Yup.object({
      openingTime: Yup.string().required("Prencha o horario de abertura!!"),
      closingTime: Yup.string().required("Preencha o horario de fechamento!!"),
      daysOfWeek: Yup.array()
        .min(4, "Selecione pelo menos 4 dias da semana!!")
        .required("Selecione o dia de abertura"),
    });

    const stepFourData = getDataValidationStep("stepFour", registerForm);

    validateSchema(stepFourSchema, stepFourData);
  }

  async function advancedStep() {
    if (step === 1) {
      await validationStepOne();
    } else if (step === 2) {
      await validationStepTwo();
    } else if (step === 3) {
      await validationStepThree();
    } else if (step === 4) {
      await validationStepFour();
    }
  }

  function backStep() {
    setStep((prevState) => prevState - 1);
  }

  async function submitForm() {
    // daysOfWeek Transformado para string quando for mandar para API
    const formattedDaysOfWeek = registerForm.daysOfWeek
      .map((day) => day.trim())
      .join(",");

    // Colocar a latitude e longitude ser pega a partir do endereço
    const newAcademyData = {
      ...registerForm,
      daysOfWeek: formattedDaysOfWeek,
      plans: [],
    };

    try {
      await api.post("/gyms", newAcademyData);

      toast.success("Academia cadastrada com sucesso!!");

      setTimeout(() => {
        navigateRegisterContext("/");
      }, 1700);
    } catch (error) {
      console.log(error);

      toast.error("Erro ao cadastrar a academia!!");
    }
  }

  function handleStateForm(name: string, value: number | string | string[]) {
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
