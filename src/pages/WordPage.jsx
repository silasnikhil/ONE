import axios from "axios";
import React, { useEffect, useState } from "react";
import bgif from "../assets/bg.gif";
import WordService from "../service/WordService";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const WordPage = () => {
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  // const wordList = [
  //   "Abomasum",
  //   "Absquatulate",
  //   "Adagio",
  //   "Alfresco",
  //   "Alcazar",
  //   "Amok",
  //   "Amphisbaena",
  //   "Antimacassar",
  //   "Atingle",
  //   "Bailiwick",
  // ];

  // const randomWord = Math.floor(Math.random() * 10);
  // const baseURL =
  //   `https://api.dictionaryapi.dev/api/v2/entries/en/` + wordList[randomWord];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await WordService.getWordData();
  //       setWord(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  // async function status(baseURL) {
  //   let response = await axios.get(baseURL);
  //   return response.data;
  // }

  // datas = status(baseURL).then((data) => {
  //   console.log(data);
  //   return data;
  // });

  // WordService.getWordData().then((obj) => {
  //   console.log(obj);
  // });

  React.useEffect(() => {
    WordService.getWordData().then(function (json) {
      jsondata = json;
      setjsonDataw(jsondata);
      setLoading(false);
      console.log(jsondata);
    });
  }, []);

  // if (jsonDataw === undefined) {
  //   return <div>Still loading...</div>;
  // }

  if (!loading) {
    return (
      <div className=" bgif bg-slate-100 border-2 border-black border-solid rounded-lg shadow-lg min-h-screen w-100 absolute flex flex-col">
        <div className="mt-4 mb-4 ml-1 mr-4">
          {/* <span className=" mt-5 w-100 float-left text-left pt-5 px-5 text-2xl font-sans font-semibold text-black">
          <h2>Your word for the day</h2>
        </span> */}

          <div className="mt-72 ml-10 flex-wrap absolute float-left font-sans font-extrabold text-black ">
            <h1 className=" font-sans ml-4 text-5xl float-left text-bold absolute">
              {jsonDataw[0].word}
            </h1>
            <div className="mt-8 float-left relative flex">
              <h1 className="mt-5 font-sans text-xl text-bold relative float-left">
                ({jsonDataw[0].meanings[0].partOfSpeech}.){" "}
                {jsonDataw[0].meanings[0].definitions[0].definition}
              </h1>
            </div>
            <div className=" pl-4 mt-40 text-left">
              <h1>Usage</h1>
            </div>
            <div className="mt-8 float-left relative flex">
              <h1 className="mt-1 font-sans text-xl text-bold relative float-left">
                {jsonDataw[0].meanings[0].definitions[0].example}
              </h1>
            </div>
            <div className="mt-52 justify-items-center justify-center">
              <Link to="/quote">
                <img
                  src={arrow}
                  height="50"
                  width="50"
                  alt="Sad"
                  className=" hover: cursor-pointer transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="spinner-grow mt-48" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
};

export default WordPage;
