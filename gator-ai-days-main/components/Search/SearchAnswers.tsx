import React, { useEffect, useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ArrowUpRightIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import AnimateHeight from "react-animate-height";

const keyWords = [
  "New York Times",
  "artifical intelligence",
  "machines",
  "Elon musk",
  "fish",
  "oceans",
  "windmills",
];

const colors = [
  "fox",
  "beetle",
  "humpback",
  "macaw",
  "cardinal",
  "bee",
  "featherGreen",
];

const videos = ["AI", "water", "machines", "friends"];

const SearchAnswers = ({
  question,
  summary,
  loadingSummary,
  videos,
  loadingVideos,
  entities,
  loadingEntities,
  news,
  loadingNews,
  research,
  loadingResearch,
}: {
  question: string;
  summary: string;
  loadingSummary: boolean;
  videos: any[];
  loadingVideos: boolean;
  entities: string[];
  loadingEntities: boolean;
  news: any;
  loadingNews: boolean;
  research: any;
  loadingResearch: boolean;
}) => {
  useEffect(() => {
    console.log("idk", entities);
  }, [entities]);
  return (
    <div className="flex w-full h-full flex-col items-center justify-start px-8">
      <p className="font-feather italic w-full text-4xl mb-6 text-white/80 flex text-left">
        Q: {question}
      </p>
      <p className="font-feather mb-2 w-full text-slate-50 flex text-left">
        📖 Summary:
      </p>
      <AnimateHeight
        duration={500}
        height={!loadingSummary ? "auto" : 30}
        className={`w-full mb-6 font-din text-slate-50 rounded-md flex items-center justify-start ${
          !loadingSummary
            ? "bg-transparent animate-none"
            : "bg-slate-700 animate-pulse"
        }`}
      >
        {loadingSummary ? (
          <div className="w-full animate-pulse flex justify-center items-center">
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <p className="font-din flex items-start justify-center w-full text-left">
            {summary}
          </p>
        )}
      </AnimateHeight>
      <p className="font-feather w-full text-slate-50 flex text-left">
        🔑 Key Terms:
      </p>

      <AnimateHeight
        duration={500}
        height={!loadingEntities ? "auto" : 30}
        className={`w-full mb-6 font-din text-slate-50 rounded-md flex items-center justify-start ${
          !loadingEntities
            ? "bg-transparent animate-none"
            : "bg-slate-700 animate-pulse"
        }`}
      >
        {loadingEntities ? (
          <div className="w-full animate-pulse flex justify-center items-center">
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="flex justify-start items-center w-full space-x-4 mr-5 py-2 max-w-full overflow-x-auto no-scrollbar">
            {entities?.map((entity: any, i: number) => {
              //determine hsl value, determine saturation by index
              const saturation = entity.salience * 100; // 100, 90, 80, 70, 60, 50, 40, 30, 20, 10
              return (
                <a key={i} href={entity.metadata.wikipedia_url}>
                  <div
                    key={i}
                    style={{
                      backgroundColor: `hsl(199, ${saturation}%, 45%)`,
                    }}
                    className={`px-6 group transition-all cursor-pointer relative whitespace-nowrap ease-in-out py-2 hover:pr-10 bg-macaw rounded-lg flex items-center justify-center font-din text-white`}
                  >
                    <ArrowTopRightOnSquareIcon
                      key={i}
                      className="absolute top-1/2 -translate-y-1/2 right-4 h-5 w-5 transition group-hover:opacity-100 opacity-0"
                    />
                    {entity.name}
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </AnimateHeight>
      <p className="font-feather w-full text-slate-50 flex text-left">
        📰 News:
      </p>
      <AnimateHeight
        duration={500}
        height={!loadingNews ? "auto" : 30}
        className={`min-w-full !w-full mb-6 font-din text-slate-50 rounded-md flex items-center justify-start ${
          !loadingNews
            ? "bg-transparent animate-none"
            : "bg-slate-700 animate-pulse"
        }`}
      >
        {loadingNews ? (
          <div className="w-full animate-pulse flex justify-center items-center">
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4 mr-5 py-2 max-w-full overflow-x-auto no-scrollbar">
            {news?.articles?.map((article: any, i: number) => {
              const urlToImage = article?.urlToImage;
              const url = article?.url;
              const title = article?.title;

              return (
                <a
                  key={i}
                  href={url}
                  style={{
                    background: `url(${urlToImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "10px",
                  }}
                  className={`w-auto border-[3px] aspect-video h-[170px] group relative cursor-pointer bg-${
                    colors[(i + 2) % 7]
                  } rounded-lg flex transition-all items-center justify-center font-din text-xl text-slate-100 border-slate-600 hover:border-macaw`}
                >
                  <div className="absolute left-0 top-0 rounded-lg w-full h-full z-10 bg-gradient-to-b from-transparent to-black/80 via-black/40 flex flex-col justify-end items-center p-4">
                    <p className="text-white text-sm text-center font-din">
                      {title}
                    </p>
                  </div>
                  {!urlToImage && (
                    <div className="absolute left-0 top-0 rounded-lg w-full h-full z-10 bg-gradient-to-b from-transparent to-black/80 via-black/40 flex flex-col justify-start items-center p-4">
                      <p className="text-white text-sm text-center font-din">
                        {article.source.name}
                      </p>
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </AnimateHeight>
      <p className="font-feather w-full text-slate-50 flex text-left">
        📹 Videos:
      </p>
      <AnimateHeight
        duration={500}
        height={!loadingVideos ? "auto" : 30}
        className={`w-full mb-6 font-din text-slate-50 rounded-md flex items-center justify-start ${
          !loadingVideos
            ? "bg-transparent animate-none"
            : "bg-slate-700 animate-pulse"
        }`}
      >
        {loadingVideos ? (
          <div className="w-full animate-pulse flex justify-center items-center">
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4 mr-5 py-2 max-w-full overflow-x-auto no-scrollbar">
            {videos?.map((video: any, i: number) => {
              const urlToVideo = video?.video_url;
              const title = video?.items[0]?.snippet?.title;
              console.log(video);

              return (
                <a
                  key={i}
                  href={urlToVideo}
                  className={`w-auto px-4 py-2 whitespace-no-wrap border-[3px] h-auto group relative cursor-pointer bg-slate-700 rounded-full flex transition-all items-center justify-center font-din text-xl text-slate-100 border-slate-600 hover:border-cardinal`}
                >
                  <PlayCircleIcon className="w-5 h-5 mr-2 group-hover:text-cardinal transition" />
                  <p className="text-white whitespace-nowrap text-sm text-center font-din">
                    {title}
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </AnimateHeight>
      <p className="font-feather w-full text-slate-50 flex text-left">
        🔬 Research Articles:
      </p>
      <AnimateHeight
        duration={500}
        height={!loadingResearch ? "auto" : 30}
        className={`w-full mb-6 font-din text-slate-50 rounded-md flex items-center justify-start ${
          !loadingResearch
            ? "bg-transparent animate-none"
            : "bg-slate-700 animate-pulse"
        }`}
      >
        {loadingResearch ? (
          <div className="w-full animate-pulse flex justify-center items-center">
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4 mr-5 py-2 max-w-full overflow-x-auto no-scrollbar">
            {research?.map((research: any, i: number) => {
              const urlToArticle = research?.id;
              const title = research?.title;
              const author = research?.authors[0];

              return (
                <a
                  key={i}
                  href={urlToArticle}
                  className={`w-auto px-4 py-2 whitespace-no-wrap border-[3px] h-auto group relative cursor-pointer bg-slate-700 rounded-full flex transition-all items-center justify-center font-din text-xl text-slate-100 border-slate-600 hover:border-${
                    colors[(i + 3) % 7]
                  } `}
                >
                  <div className="hover:border-fox hover:border-beetle hover:border-humpback hover:border-macaw  hover:border-cardinal hover:border-bee hover:border-featherGreen" />
                  <div
                    key={i}
                    className={`min-w-[160px] bg-white shadow-lg h-[200px] group relative transition hover:scale-[102%] hover:z-50 bg-${
                      colors[(i + 3) % 7]
                    } rounded-lg flex px-2 py-4 items-center justify-between font-din flex-col text-xl text-white`}
                  >
                    <p className="text-slate-700 text-xs text-center">
                      {title}
                    </p>
                    <p className="text-slate-700 text-xs text-center">
                      {author}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </AnimateHeight>
    </div>
  );
};

export default SearchAnswers;
