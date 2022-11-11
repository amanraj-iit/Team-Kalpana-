import { TypeAnimation } from "react-type-animation";
import { TextElements } from "../../constants/translations";

export const TypingAnimation = ({
  userLanguage,
  dictionary,
}: {
  userLanguage: string;
  dictionary: TextElements;
}) => {
  const sampleQuestions = dictionary.searchPage.sampleQuestions;
  //push 1000 inbetween each value in new array
  const sampleQuestionsWith1000: Array<number | string> =
    sampleQuestions.reduce((acc: any, curr) => {
      acc.push(curr);
      acc.push(1000);
      return acc;
    }, []);

  return (
    <TypeAnimation
      sequence={sampleQuestionsWith1000}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      speed={50}
      className="font-din text-xl text-slate-400 px-14"
    />
  );
};
