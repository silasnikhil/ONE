import React, { useState } from "react";
import { Link } from "react-router-dom";
import bar from "../assets/blackbar.png";
import FactService from "../service/FactService";
import arrow from "../assets/arrow.svg";

const FactPage = () => {
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    FactService.getFactData().then(function (json) {
      jsondata = json;
      setjsonDataw(jsondata);
      setLoading(false);
      console.log(jsondata);
    });
  }, []);

  if (!loading) {
    return (
      <div className="factbg absolute">
        <div className="header-centered font-shadows text-5xl text-black font-bold">
          YOUR FACT FOR THE DAY!
        </div>
        <div className="factcen mt-8 text-black flex-wrap text-center relative font-julius font-bold text-3xl">
          {jsonDataw.text}
        </div>
        <div className="blackbarpos relative shadow-2xl">
          <img src={bar} height="250" width="340" alt="Black Bar bottom" />
        </div>
        <div className="arrowpos">
          <Link to="/article">
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

export default FactPage;
