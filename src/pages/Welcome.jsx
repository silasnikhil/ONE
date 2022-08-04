import React from "react";
import { Link } from "react-router-dom";
import face from "../assets/reflectly_face.gif";
import { UserAuth } from "../context/AuthContext";

const Welcome = () => {
  const buttonText = [
    "Let's go!",
    "Let's get it!",
    "Heck, yes!",
    "Great, take me there!",
  ];
  const random = Math.floor(Math.random() * 4);

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
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
      <div className="flex mt-5 px-10 py-10 justify-center font-sans font-semibold text-white">
        Hello, {user?.displayName} <br></br>
        Welcome to The "ONE"
      </div>
      <div className=" px-5 pt-10 justify-start font-sans font-semibold text-gray-300 flex-wrap">
        Are you ready for your daily dose of learning and personal growth?
      </div>
      <div className=" mt-40">
        <Link to="/mood" className="btn btn-light btn-lg">
          <span>{buttonText[random]}</span>
        </Link>
      </div>
      <Link to="/">
        <div className="mt-5">
          <button onClick={handleSignOut} className="btn btn-light btn-lg">
            LogOut
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
