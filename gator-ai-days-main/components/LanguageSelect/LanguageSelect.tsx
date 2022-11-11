import React, { useContext, useState } from "react";
import Twemoiji from "../Twemoji/Twemoiji";
import { Language, languages } from "./languages";
import { motion } from "framer-motion";
import { languageVariants, variants } from "../../constants/animations";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageSelect = () => {
  const { userLanguage, changeUserLanguage } = useContext(LanguageContext);
  // set selected language by calling context method
  const handleLanguageChange = (language: Language) =>
    changeUserLanguage(language);

  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    languages[0]
  );
  return (
    <motion.div className="w-full grid grid-cols-2 gap-4 px-4">
      {languages.map((language: Language, i: number) => (
        <motion.div
          key={language.code}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={languageVariants(i, i % 2 === 0)}
          className={`cursor-pointer transition duration-300 border-[3px] w-full rounded-xl py-2 px-4 flex items-center ${
            selectedLanguage?.name === language.name
              ? "border-macaw bg-slate-700"
              : "border-slate-600 bg-slate-800"
          }`}
          onClick={() => {
            setSelectedLanguage(language);
            handleLanguageChange(language);
          }}
        >
          <div className="mr-4 h-12 w-12">
            <Twemoiji emoji={language.flag} />
          </div>
          <div
            className={`font-bold font-din text-white transition duration-300 text-xl ${
              selectedLanguage?.name === language.name
                ? "text-macaw"
                : "text-white"
            }`}
          >
            {language.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LanguageSelect;
