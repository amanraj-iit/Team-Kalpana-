import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

export function Text({ tid }: { tid: string }) {
  const languageContext = useContext(LanguageContext);
  return <></>;
}
