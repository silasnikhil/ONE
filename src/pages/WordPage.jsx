import React, { useState } from "react";
import WordService from "../service/WordService";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const WordPage = () => {
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    WordService.getWordData().then(function (json) {
      jsondata = json;
      setjsonDataw(jsondata);
      setLoading(false);
      console.log(jsondata);
    });
  }, []);

  if (!loading) {
    return (
      <div className="MainContainer">
        <div className="header-centered font-shadows text-5xl text-black font-extrabold">
          YOUR WORD FOR THE DAY!
          <div className="mt-44 ml-5 flex-wrap absolute float-left font-sans font-extrabold text-black ">
            <h1 className=" font-sans ml-4 text-5xl float-left text-bold absolute">
              {jsonDataw[0].word}
            </h1>
            <div className="mt-8 float-left  ">
              <h1 className="mt-5 font-sans text-xl text-bold ">
                ({jsonDataw[0].meanings[0].partOfSpeech}.){" "}
                {jsonDataw[0].meanings[0].definitions[0].definition}
              </h1>
            </div>
            <div className=" ml-4 mt-40 text-left">
              <h1>Usage</h1>
            </div>
            <div className="mt-8 float-left relative flex">
              <h1 className="mt-1 font-sans text-xl text-bold relative float-left">
                {jsonDataw[0].meanings[0].definitions[0].example}
              </h1>
            </div>
          </div>
        </div>
        <div className="arrowpos">
          <Link to="/quote">
            <img
              src={arrow}
              height="50"
              width="50"
              alt="arrow"
              className=" hover: cursor-pointer transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150"
            />
          </Link>
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
