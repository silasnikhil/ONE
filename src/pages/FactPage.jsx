import React, { useState } from "react";
import bar from "../assets/blackbar.png";
import FactService from "../service/FactService";

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
          YOUR QUOTE FOR THE DAY!
        </div>
        <div className="factcen mt-8 text-black flex-wrap text-center relative font-julius font-bold text-3xl">
          {jsonDataw.text}
        </div>
        <div className="blackbarpos relative">
          <img src={bar} height="250" width="340" alt="Black Bar bottom" />
        </div>
      </div>
    );
  }
};

export default FactPage;
