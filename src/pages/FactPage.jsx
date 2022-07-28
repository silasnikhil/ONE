import axios from "axios";
import React from "react";
import bgif from "../assets/bg.gif";

const FactPage = () => {
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

  const randomWord = Math.floor(Math.random() * 10);
  console.log(wordList[randomWord]);

  const baseURL =
    `https://api.dictionaryapi.dev/api/v2/entries/en/` + wordList[randomWord];

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data[0].meanings[0].definitions[0].definition);
    });
  }, []);

  return (
    <div className=" bg-black min-h-screen">
      <span className=" float-left pt-5 px-5 text-2xl font-sans font-semibold shadow-xl">
        Your word for the day
      </span>
    </div>
  );
};

export default FactPage;
