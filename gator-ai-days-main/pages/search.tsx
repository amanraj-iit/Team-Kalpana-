import React, { useContext } from "react";
import { TypingAnimation } from "../components/Search/TypingAnimation";
import { useEffect, useState } from "react";
import { LayoutGroup, motion, useAnimationControls } from "framer-motion";
import AnimateHeight from "react-animate-height";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Gator from "../components/Gator/Gator";
import Eye from "../components/Gator/Eye";
import LeftHand from "../components/Gator/LeftHand";
import RightHand from "../components/Gator/RightHand";
import {
  articles,
  chat,
  entity,
  explain,
  researchArticles,
  youtube,
} from "../constants/endpoints";
import { LanguageContext } from "../context/LanguageContext";
import AllyGator from "../assets/allyRobot.png";
import SearchAnswers from "../components/Search/SearchAnswers";
import Header from "../components/Header/Header";
import axios from "axios";
import { variants } from "../constants/animations";

export interface Message {
  text: string;
  type: "user" | "gator";
}

const Search = () => {
  const [showTypingAnimation, setShowTypingAnimation] = useState<boolean>(true);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [chatHeight, setChatHeight] = useState<number>(0);
  const [question, setQuestion] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>("");
  const [news, setNews] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [entities, setEntities] = useState<string[]>([]);
  const [research, setResearch] = useState<string[]>([]);
  const [loadingSummary, setLoadingSummary] = useState<boolean>(false);
  const [loadingNews, setLoadingNews] = useState<boolean>(false);
  const [loadingEntities, setLoadingEntities] = useState<boolean>(false);
  const [loadingVideos, setLoadingVideos] = useState<boolean>(false);
  const [loadingResearch, setLoadingResearch] = useState<boolean>(false);

  const [hideIntro, setHideIntro] = useState<boolean>(false);
  //set summary without rerendering all components

  const { userLanguage, dictionary, edLevel } = useContext(LanguageContext);

  const [messages, setMessages] = useState<Message[]>([
    {
      text: dictionary.searchPage.gatorGreeting1,
      type: "gator",
    },
    {
      text: dictionary.searchPage.gatorGreeting2,
      type: "gator",
    },
  ]);

  const getAiResponse = async (
    e: React.MouseEvent | React.FormEvent,
    question: string
  ) => {
    e.preventDefault();
    setLoadingResponse(true);
    setLoadingSummary(true);
    setLoadingNews(true);
    setLoadingEntities(true);
    setLoadingVideos(true);
    setLoadingResearch(true);
    hideGator();
    setHideIntro(true); // hide intro text
    setChatHeight(window.innerHeight - 180);
    setTimeout(() => {
      // set timeout and wait for animation to finish
      setTimeout(() => {}, 1000);
      setShowResults(true);
      pushMessage({ text: question, type: "user" });
    }, 500);
    try {
      setCurrentQuestion(question);
      setQuestion("");

      const response = await fetch(chat, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
          "Content-Type": "application/json", // this shows the expected content type
        },
        body: JSON.stringify({ prompt: question, index: edLevel }),
      });
      const data = await response.json();

      setTimeout(() => {
        console.log(data);
        console.log(data.output);

        let aiResponse = data.output; // get response from AI
        //find index of 'AI:' and if it there, chop anything before it
        const aiIndex = data.output.indexOf("AI:"); // find index of 'AI:' in response
        if (aiIndex !== -1) {
          aiResponse = data.output.slice(aiIndex + 3); // chop anything before 'AI:' and the 'AI:' itself
        } else {
          aiResponse = data.output.slice(0); // AI not in there
        }

        pushMessage({ text: aiResponse, type: "gator" }); // push gator response to chat

        setLoadingResponse(false);
      }, 100); // wait for gator to finish talking
    } catch (error) {
      setLoadingResponse(false);
      console.log(error);
    }
    //send post request with prompt to each endpoint
    try {
      const response = await fetch(explain, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
          "Content-Type": "application/json", // this shows the expected content type
        },
        body: JSON.stringify({ prompt: question, index: edLevel }),
      });
      const data = await response.json();
      console.log("summary: " + data.output);
      setSummary(data.output);
      setLoadingSummary(false);
    } catch (error) {
      setLoadingSummary(false);
      console.log(error);
    }
    try {
      const response = await fetch(entity, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
          "Content-Type": "application/json", // this shows the expected content type
        },
        body: JSON.stringify({ prompt: question }),
      }).then(async (response) => {
        //call news endpoint with first entity
        const data = await response.json();
        console.log("entity: " + data.output);
        setEntities(data.output);
        setLoadingEntities(false);
        if (data.output.length > 0) {
          try {
            const response = await fetch(articles, {
              method: "POST",
              headers: {
                "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
                "Content-Type": "application/json", // this shows the expected content type
              },
              body: JSON.stringify({ prompt: data.output[0].name }), // send first entity to news endpoint
            });
            const newsData = await response.json();
            console.log("news: " + newsData);
            setNews(newsData.output);
            setLoadingNews(false);
          } catch (error) {
            setLoadingNews(false);
            console.log(error);
          }
        }
        try {
          const response = await fetch(researchArticles, {
            method: "POST",
            headers: {
              "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
              "Content-Type": "application/json", // this shows the expected content type
            },
            body: JSON.stringify({ prompt: data.output[0].name }), // send first entity to news endpoint
          });
          const researchData = await response.json();
          console.log("news: " + researchData);
          setResearch(researchData.output);
          setLoadingResearch(false);
        } catch (error) {
          setLoadingResearch(false);
          console.log(error);
        }
      });
    } catch (error) {
      setLoadingEntities(false);
      console.log(error);
    }

    try {
      const response = await fetch(youtube, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
          "Content-Type": "application/json", // this shows the expected content type
        },
        body: JSON.stringify({ prompt: question }),
      });
      const data = await response.json();
      console.log(data);
      console.log("youtube: " + data.output);
      setVideos(data.output);
      setLoadingVideos(false);
    } catch (error) {
      setLoadingVideos(false);
      console.log(error);
    }
  };

  const gatorControls = useAnimationControls();
  const handControls = useAnimationControls();

  const hideGator = () => {
    gatorControls.start({ translateY: [null, -80, 85] });
    handControls.start({ translateY: [null, 12, -5], opacity: [null, 1, 0] });
  };

  const pushMessage = (message: Message) => {
    setMessages((messages) => [...messages, message]);
  };

  const angle = ({
    cx,
    cy,
    x,
    y,
  }: {
    cx: number;
    cy: number;
    x: number;
    y: number;
  }) => {
    const radians = Math.atan2(x - cx, cy - y);
    return (radians * 180) / Math.PI;
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const anchor = document.getElementById("gator");
      const rect = anchor!.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.height / 2;

      const angleDeg = angle({
        cx: anchorX,
        cy: anchorY,
        x: mouseX,
        y: mouseY,
      });

      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        //@ts-ignore
        eye.style.transform = `rotate(${225 + angleDeg}deg)`;
      });
    });
  }, []);

  const spring = {
    stiffness: 100,
    damping: 30,
  };

  return (
    <LayoutGroup>
      <div
        className={`w-screen h-max max-h-screen min-h-screen p-10 pt-28 pb-20 bg-slate-800 flex relative items-center ${
          showResults ? "justify-start" : "justify-center"
        }`}
      >
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={hideIntro ? { opacity: 0 } : { opacity: 100 }}
          transition={{ duration: 0.2 }}
          className={`absolute mb-64 flex items-center flex-col justify-center transition duration-300 ${
            hideIntro ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Waving emoji */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants(0)}
            className="text-4xl mb-2"
          >
            👋
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants(0.5)}
            className="font-feather text-slate-100 text-2xl mb-2 text-center"
          >
            {dictionary.searchPage.gatorGreeting1}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants(1)}
            className="font-din text-slate-200 text-lg max-w-sm mb-4 text-center"
          >
            {dictionary.searchPage.gatorGreeting2}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants(1.5)}
            className="w-8 h-auto mb-10 mr-8"
          >
            <svg
              viewBox="0 0 159 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 165.5C82.5 149.5 155.2 84 152 6"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout="position"
          layoutId="chat-window"
          transition={{ duration: 1 }}
          className={`h-full w-full z-50 flex flex-col items-center justify-center space-y-4 max-w-lg`}
        >
          <AnimateHeight
            style={{
              minHeight: showResults ? "0" : "auto", // have to set minHeight to 0 for AnimateHeight to work properly
            }}
            className={`w-full !overflow-scroll duration-500 p-4 no-scrollbar flex transition-all flex-col items-center justify-end rounded-md bg-slate-700 ${
              showResults ? "p-4" : "p-0"
            }`}
            duration={1000}
            height={chatHeight}
          >
            <motion.div layout="position" className="w-full ">
              {messages.map((message, index) => (
                <motion.div
                  layout="position"
                  layoutId={`message-${index}`}
                  key={index}
                  className={`w-full flex items-start mt-4 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "gator" && (
                    <img
                      src={AllyGator.src}
                      className="mr-1"
                      height={50}
                      width={50}
                    />
                  )}
                  <div
                    className={`max-w-[75%] p-4 rounded-md ${
                      message.type === "user" ? "bg-slate-600" : "bg-slate-500"
                    }`}
                  >
                    <p className="text-white font-din">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimateHeight>
          <form
            className="w-full space-y-4"
            onSubmit={(e: any) => {
              getAiResponse(e, question);
            }}
          >
            <div className="relative">
              <div className="w-full absolute h-10 z-20 top-14 left-0 bg-slate-800" />
              <motion.div
                animate={gatorControls}
                transition={{ duration: 0.7, times: [0, 0.3, 0.7] }}
                className={`absolute z-10 w-40 h-auto left-10 bottom-[48px] transition duration-300 ease-in ${""}`}
              >
                <Gator />
                <Eye pupilSize="8px" size={"20px"} top={"16px"} left={"27px"} />
                <Eye pupilSize="6px" size={"15px"} top={"18px"} left={"58px"} />
              </motion.div>
              <motion.div
                animate={handControls}
                transition={{ duration: 0.7, times: [0, 0.3, 0.7] }}
                className={`absolute z-30 w-5 h-auto left-8 bottom-[42px] transition ease-in-out ${
                  showResults ? "opacity-0 -translate-y-2" : "opacity-100"
                }`}
              >
                <LeftHand />
              </motion.div>
              <motion.div
                animate={handControls}
                transition={{ duration: 0.7, times: [0, 0.3, 0.7] }}
                className={`absolute z-30 w-5 h-auto left-24 bottom-[42px] transition ease-in-out ${
                  showResults ? "opacity-0 -translate-y-2" : "opacity-100"
                }`}
              >
                <RightHand />
              </motion.div>
              <div className="relative z-20 bg-slate-700 rounded shadow-lg h-14 flex items-center">
                <input
                  className="w-4/5 pl-14 text-xl !outline-none font-din text-slate-200 bg-slate-700"
                  type="text"
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  onFocus={() => setShowTypingAnimation(false)}
                  onBlur={() => {
                    if (question === "") {
                      setShowTypingAnimation(true);
                    }
                  }}
                />
                <button
                  className="h-[80%] transition cursor-pointer w-20 rounded-md absolute right-0 flex items-center justify-center m-2 bg-macaw hover:bg-humpback text-white font-din"
                  onClick={(e: any) => {
                    getAiResponse(e, question);
                  }}
                  disabled={question === "" || loadingResponse} // Disable button if there is no question
                >
                  {loadingResponse ? ( // Show loading animation if loading response
                    <div className="bouncing-loader">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    <div>Search</div>
                  )}
                </button>
                <div className="absolute left-4">
                  <MagnifyingGlassIcon className="h-6 w-6 text-slate-500" />
                </div>
                <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                  {showTypingAnimation && !showResults && (
                    <TypingAnimation
                      userLanguage={userLanguage}
                      dictionary={dictionary}
                    />
                  )}
                </div>
              </div>
            </div>
          </form>
        </motion.div>
        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layout="position"
            className="flex-1 max-h-screen h-full py-10 pl-5 overflow-scroll no-scrollbar"
          >
            <SearchAnswers
              question={currentQuestion}
              summary={summary}
              loadingSummary={loadingSummary}
              videos={videos}
              loadingVideos={loadingVideos}
              entities={entities}
              loadingEntities={loadingEntities}
              news={news}
              loadingNews={loadingNews}
              research={research}
              loadingResearch={loadingResearch}
            />
          </motion.div>
        )}
      </div>
    </LayoutGroup>
  );
};

export default Search;
