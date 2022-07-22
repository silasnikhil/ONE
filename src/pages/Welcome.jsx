import React from "react";
import face from "../assets/reflectly_face.gif";

const Welcome = () => {
  return (
    <div className="flex-wrap justify-center">
      <div>
        <img
          src={face}
          height="100"
          width="100"
          alt="Facey"
          className="d-inline-block align-top"
        />
      </div>
      <div className="flex mt-5 px-10 py-10 justify-center font-sans font-semibold text-white">
        Hello there!<br></br>
        Welcome to The "ONE"
      </div>
      <div className=" px-5 pt-10 justify-start font-sans font-semibold text-gray-300 flex-wrap">
        Are you ready for your daily dose of learning and personal growth?
      </div>
    </div>
  );
};

export default Welcome;
