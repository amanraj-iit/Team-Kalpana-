import React, { createContext, useState } from "react";
import { Language } from "../components/LanguageSelect/languages";
import { TextElements, translations } from "../constants/translations";

export interface LanguageContextType {
  userLanguage: string;
  changeUserLanguage: (language: Language) => void;
  dictionary: TextElements;
  edLevel: number;
  setEdLevel: (edLevel: number) => void; // set education level
}

// create the language context with default selected language
export const LanguageContext = createContext<LanguageContextType>({
  userLanguage: "en",
  dictionary: translations.en,
  changeUserLanguage: () => null,
  edLevel: 1,
  setEdLevel: () => null,
});

// it provides the language context to app
export function LanguageProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [userLanguage, setUserLanguage] = useState<string>("en");
  const [edLevel, setEdLevel] = useState<number>(1);
  const provider = {
    userLanguage,
    //@ts-ignore
    dictionary: translations[userLanguage],
    changeUserLanguage: (newLanguage: Language) => {
      // check local storage for language
      const defaultLanguage = window.localStorage.getItem("navigator-lang");
      setUserLanguage(newLanguage.code);
      window.localStorage.setItem("navigator-lang", newLanguage.code);
    },
    edLevel,
    setEdLevel: (newLevel: number) => {
      setEdLevel(newLevel);
    },
  };
  return (
    //@ts-ignore
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
