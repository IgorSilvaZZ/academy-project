import { useContext } from "react";

import { RegisterContext, IRegisterContext } from "../contexts/RegisterContext";

export const useRegister = (): IRegisterContext => {
  const context = useContext(RegisterContext);

  return context;
};
