import { TypeWithKey } from "../models";

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Se rompió la conexión",
  };

  return codeMatcher[errorCode];
};
