import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { greetings } from "../../components/LanguageSelect/languages";

const TranslatingText = ({ languageCode }: { languageCode: string }) => {
  return (
    <TextTransition
      className="w-full flex justify-center items-center"
      springConfig={presets.wobbly}
    >
      <div className="font-feather text-center w-full text-white text-4xl px-8">
        {greetings[languageCode]}
      </div>
    </TextTransition>
  );
};

export default TranslatingText;
