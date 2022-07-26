import React from "react";
import face from "../assets/reflectly_face.gif";
import sad from "../assets/sad.png";
import sad2 from "../assets/sad2.png";
import meh from "../assets/meh.png";
import happy from "../assets/happy.png";
import happy2 from "../assets/happy2.png";
import { Link } from "react-router-dom";

const MoodSelector = () => {
  return (
    <div className="flex-wrap justify-center gbg">
      <div>
        <img
          src={face}
          height="100"
          width="100"
          alt="Facey"
          className="d-inline-block align-top pt-20"
        />
      </div>
      <div className=" px-5 pt-10 justify-start font-sans font-semibold text-gray-300 flex-wrap drop-shadow-xl">
        Hey Nikhil, Let us know how you're feeling today?
        <div className=" px-5 pt-20 justify-start font-sans font-semibold text-gray-300 flex-wrap">
          Select the emoji that most accurately describes your current mood.
        </div>
        <div className="flex justify-evenly px-5 pt-44 drop-shadow-2xl">
          <div className="transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150">
            <Link to="/start">
              <img
                src={sad}
                height="50"
                width="50"
                alt="Sad"
                className=" hover: cursor-pointer"
              />
            </Link>
          </div>
          <div className="transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150">
            <Link to="/start">
              <img
                src={sad2}
                height="75"
                width="75"
                alt="Sad2"
                className=" hover: cursor-pointer"
              />
            </Link>
          </div>
          <div className="transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150">
            <Link to="/start">
              <img
                src={meh}
                height="50"
                width="50"
                alt="indiffetent"
                className=" hover: cursor-pointer"
              />
            </Link>
          </div>
          <div className="transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150">
            <Link to="/start">
              <img
                src={happy}
                height="50"
                width="50"
                alt="happy"
                className=" hover: cursor-pointer"
              />
            </Link>
          </div>
          <div className="transition ease-in-out over:-translate-y-1 hover:scale-150 delay-150">
            <Link to="/start">
              <img
                src={happy2}
                height="60"
                width="60"
                alt="happy2"
                className=" hover: cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
