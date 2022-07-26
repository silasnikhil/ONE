import React, { useState } from "react";
import ArticleService from "../service/ArticleService";
import em from "../assets/em.jpeg";
import arrow from "../assets/arrow2.png";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  let jsondata;
  const [jsonDataw, setjsonDataw] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    ArticleService.getArticleData().then(function (json) {
      jsondata = json;
      setjsonDataw(jsondata);
      setLoading(false);
      console.log(jsondata);
    });
  }, []);
  const rand = Math.floor(Math.random() * 10);

  if (!loading) {
  return (
    <div className="MainContainer quotebg">
      <div className="header-centered text-white font-shadows text-5xl font-bold">
        YOUR ARTICLE FOR THE DAY!
      </div>
      <div className="factcen max-h-300px max-w-xl bg-slate-300 px-2 py-2 rounded-xl mt-16 flex-row text-left text-black relative font-julius font-bold">
        <div className="rounded-lg border">
          <img
            className="rounded-lg"
            src={jsonDataw.articles[rand].urlToImage}
            // src={em}
            alt="ArticleImage"
          />
        </div>

        <div className="flex  mt-4">
          {jsonDataw.articles[rand].title}
          {/* Elon Musk's Next Project Could Be A Personal Airport */}
        </div>
        <div className="flex mt-2 text-sm text-slate-600">
          {jsonDataw.articles[rand].source.name}
          {/* The Verge */}
        </div>
        <div className="flex mt-2 text-sm text-slate-600">Today</div>
        <div className="flex float-right text-sm text-slate-600 pb-4 px-2">
          <a
            href={jsonDataw.articles[rand].url}
            // href="https://www.news18.com/news/tech/elon-musks-next-project-could-be-a-personal-airport-5664295.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="arrowpos">
        <Link to="/fortune">
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
};
};

export default ArticlePage;
