import axios from "axios";
import React, { useEffect, useState } from "react";
import bgif from "../assets/bg.gif";
import WordService from "../service/WordService";

const WordPage = () => {
  let wordData;
  let wordDataJS;
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  const wordList = [
    "Abomasum",
    "Absquatulate",
    "Adagio",
    "Alfresco",
    "Alcazar",
    "Amok",
    "Amphisbaena",
    "Antimacassar",
    "Atingle",
    "Bailiwick",
  ];

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
      <div className=" bg-slate-300 min-h-screen w-100 absolute">
        {/* <span className=" mt-5 w-100 float-left text-left pt-5 px-5 text-2xl font-sans font-semibold text-black">
          <h2>Your word for the day</h2>
        </span> */}

        <div className="mt-72 ml-10 flex-wrap relative float-left font-sans font-extrabold text-black ">
          <h1 className=" font-sans ml-4  text-5xl float-left text-semibold absolute">
            {jsonDataw[0].word}
          </h1>
          <div className="mt-8 ml-2.5 float-left relative flex">
            <h1 className=" mt-5 font-sans text-xl text-semibold relative float-left">
              (n.) {jsonDataw[0].meanings[0].definitions[0].definition}
            </h1>
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
