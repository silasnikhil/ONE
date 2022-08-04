import React, { useState } from "react";
import bar from "../assets/blackbar.png";
import sign from "../assets/gemini.png";
import FortuneService from "../service/FortuneService";

const FortunePage = () => {
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    FortuneService.getFortuneData().then(function (json) {
      jsondata = json;
      setjsonDataw(jsondata);
      setLoading(false);
      console.log(jsondata);
    });
  }, []);

  if (!loading) {
    return (
      <div className="MainContainer factbg">
        <div className="header-centered font-shadows text-5xl text-black font-bold">
          YOUR FORTUNE FOR THE DAY!
        </div>
        <div className="factcen mt-16 max-h-96 max-w-xl text-black flex-wrap text-center relative font-julius font-bold text-3xl">
          <div>
            <img
              className="signpos"
              src={sign}
              height="50"
              width="50"
              alt="sign symbol"
            />
          </div>
          <div className="pt-4">{jsonDataw.description}</div>
        </div>
        <div className="blackbarpos1 relative shadow-2xl">
          <img src={bar} height="250" width="340" alt="Black Bar bottom" />
        </div>
      </div>
    );
  }
};
export default FortunePage;
