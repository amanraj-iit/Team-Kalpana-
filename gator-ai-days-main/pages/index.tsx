import Head from "next/head";
import Image from "next/image";
import LanguageSelect from "../components/LanguageSelect/LanguageSelect";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Button from "../components/shared/Button";
import Header from "../components/Header/Header";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "../constants/animations";
import { EducationLevel, educationLevels } from "../constants/info";
import { LanguageContext } from "../context/LanguageContext";
import { Text } from "../components/shared/TranslatedText/Text";
import TranslatingText from "../components/LanguageSelect/TranslatingText";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [hideLastPage, setHideLastPage] = useState(false);

  const { userLanguage, dictionary, setEdLevel } = useContext(LanguageContext);

  useEffect(() => {
    console.log(userLanguage);
  }, [userLanguage]);

  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState<EducationLevel | null>(
    null
  );

  return (
    <motion.div className="w-full bg-slate-800 h-max min-h-screen flex items-center flex-col justify-center py-5">
      <Header />
      <motion.div className="w-full max-w-xl h-full bg-slate-800">
        <AnimatePresence exitBeforeEnter>
          {step === 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              variants={variants(0)}
              key={step}
              className="flex items-center flex-col justify-center space-y-4"
            >
              <h1 className="text-4xl font-feather text-white">
                Welcome to GuppyAI!
              </h1>
              <Button title="Continue" onClick={() => setStep(1)} />
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              key={step}
              className="flex items-center flex-col justify-center space-y-4"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants(0)}
              >
                <TranslatingText languageCode={userLanguage} />
              </motion.div>
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={variants(0.5)}
                className="font-din text-lg text-white px-8"
              >
                {dictionary.languagePage.description}
              </motion.h2>
              <LanguageSelect />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants(2)}
                className="px-4 w-full"
              >
                <Button
                  title={dictionary.buttonText.continue}
                  onClick={() => setStep(2)}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants(2.1)}
                className="text-slate-400 flex relative group items-center justify-center cursor-pointer font-din"
                onClick={() => setStep(0)}
              >
                <ArrowLeftIcon className="absolute left-0 translate-x-0 z-10 transition ease-in-out group-hover:-translate-x-4 group-hover:opacity-100 opacity-0 w-5 h-5 mr-2" />
                <div className="transition-all translate-x-0 group-hover:translate-x-2">
                  {dictionary.languagePage.backButtonText}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              key={step}
              className={`flex items-center flex-col justify-center transition ease-in-out duration-500 space-y-4 p-4 ${
                hideLastPage ? "opacity-0" : "opacity-100"
              }`}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants(0)}
                className="w-full"
              >
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={variants(0.1)}
                  className="text-3xl font-feather text-white"
                >
                  {dictionary.infoPage.nameText}
                </motion.h1>
                <motion.input
                  initial="hidden"
                  animate="visible"
                  variants={variants(0.2)}
                  className="w-full font-din bg-slate-700 text-white rounded-lg !outline-none px-4 py-4 mt-4"
                  placeholder={dictionary.infoPage.namePlaceHolder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="h-8" />
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={variants(0.4)}
                  className="text-3xl font-feather text-white"
                >
                  {dictionary.infoPage.edLevelText}
                </motion.h1>
                <div className="h-4" />
                <div className="w-full flex items-center justify-center space-x-3">
                  {educationLevels.map((level: EducationLevel, i: number) => {
                    return (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants(0.5 + i * 0.1)}
                        key={i}
                        onClick={() => {
                          setEducationLevel(level);
                          setEdLevel(i);
                        }}
                        className={`h-32 group p-4 rounded-lg cursor-pointer border-[3px] transition-all bg-slate-700 text-white w-full flex-col flex items-center justify-center ${
                          educationLevel === level
                            ? "border-macaw text-macaw bg-slate-600"
                            : "border-slate-600 hover:border-white"
                        }`}
                      >
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={variants(0.5 + i * 0.075)}
                          className="w-6 mb-2 h-6 flex items-center justify-center"
                        >
                          {level.icon}
                        </motion.div>
                        <motion.h1
                          initial="hidden"
                          animate="visible"
                          variants={variants(0.5 + i * 0.1)}
                          className="font-din text-center"
                        >
                          {dictionary.infoPage.edLevels[i].name}
                        </motion.h1>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants(1)}
                className="w-full"
              >
                <Button
                  title={dictionary.buttonText.continue}
                  onClick={() => {
                    setHideLastPage(true);
                    setTimeout(() => {
                      router.push("/search");
                    }, 700);
                  }}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants(1.1)}
                className="text-slate-400 flex relative group items-center justify-center cursor-pointer font-din"
                onClick={() => setStep(1)}
              >
                <ArrowLeftIcon className="absolute left-0 translate-x-0 z-10 transition ease-in-out group-hover:-translate-x-4 group-hover:opacity-100 opacity-0 w-5 h-5 mr-2" />
                <div className="transition-all translate-x-0 group-hover:translate-x-2">
                  {dictionary.infoPage.backButtonText}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
