import React, { useEffect, useState } from "react";
import quote1 from "../assets/quote1.png";
import quote2 from "../assets/quote2.png";
import bar1 from "../assets/bar1.png";
import QuotesService from "../service/QuotesService";

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
        <div className="barpostop">
          <img src={bar1} height="250" width="250" alt="Yellow Bar Top" />
        </div>
        <div className="centered shadow-xl text-white flex-wrap text-justify relative font-sans font-semibold">
          {jsonDataw[0].q}
          <div className="shadow-xl pt-2 flex-wrap relative font-sans fonts-semibold text-gray-400">
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
      </div>
    );
  }
};

export default QuotePage;
