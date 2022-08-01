import React, { useState } from "react";
import quote1 from "../assets/quote1.png";
import quote2 from "../assets/quote2.png";
import bar1 from "../assets/bar1.png";
import QuotesService from "../service/QuotesService";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow2.png";

const QuotePage = () => {
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    QuotesService.getQuotesData().then(function (json) {
      jsondata = json;
      setjsonDataw(jsondata);
      setLoading(false);
      console.log(jsondata);
    });
  }, []);

  if (!loading) {
    return (
      <div className="quotebg absolute">
        <div className="header-centered font-shadows text-5xl font-bold">
          YOUR QUOTE FOR THE DAY!
        </div>
        <div className="barpostop">
          <img src={bar1} height="250" width="250" alt="Yellow Bar Top" />
        </div>
        <div className="centered shadow-xl text-white flex-wrap text-justify relative font-julius font-bold text-3xl">
          {jsonDataw[0].q}
          <div className="shadow-xl pt-2 flex-wrap relative font-scrips fonts-semibold text-gray-400">
            {jsonDataw[0].a}
          </div>
        </div>
        <div className="shadow-xl nearcen text-black">
          <img src={quote1} height="80" width="80" alt="Quote1" />
        </div>
        <div className="shadow-xl nearcent text-black mt-20">
          <img src={quote2} height="80" width="80" alt="Quote2" />
        </div>
        <div className="barposdown">
          <img src={bar1} height="250" width="250" alt="Yellow Bar bottom" />
        </div>
        <div className="arrowpos">
          <Link to="/fact">
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
  }
};

export default QuotePage;
