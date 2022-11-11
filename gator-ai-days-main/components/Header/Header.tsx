import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { languages } from "../LanguageSelect/languages";
import Twemoiji from "../Twemoji/Twemoiji";

const Header = () => {
  const { userLanguage } = useContext(LanguageContext); // get user language from context

  //find the language object from the languages array by the user language code
  const language = languages.find((language) => language.code === userLanguage);

  return (
    <div className="w-full h-16 px-6 absolute top-0 left-0 flex justify-between items-center">
      <div className="font-feather text-white text-2xl">
        GUPPY
        <span className="bg-gradient-to-br from-beetle to-humpback bg-clip-text text-transparent">
          AI
        </span>
      </div>
      {language && (
        <div className="flex items-center">
          <div className="font-bold font-din text-white text-sm">
            {language.name}
          </div>
          <div className="ml-4 h-12 w-12">
            <Twemoiji emoji={language.flag} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
