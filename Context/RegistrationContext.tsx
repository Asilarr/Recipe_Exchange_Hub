import React, { createContext, ReactNode, useState } from "react";
interface RegistrationData {
  name: string;
  email: string;
  password: string;
  confirm: string;
}
interface RegistrationContextProps {
  registrationData: RegistrationData | null;
  setRegistrationData: React.Dispatch<
    React.SetStateAction<RegistrationData | null>
  >;
}
interface RegistrationProviderProps {
  children: ReactNode;
}
export const RegistrationContext = createContext<RegistrationContextProps>({
  registrationData: null,
  setRegistrationData: () => {},
});

export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({
  children,
}) => {
  const [registrationData, setRegistrationData] =
    useState<RegistrationData | null>(null);

  return (
    <RegistrationContext.Provider
      value={{ registrationData, setRegistrationData }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
