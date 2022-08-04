import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { UserAuth } from "../context/AuthContext";
import Welcome from "./Welcome";

const SignIn = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/welcome");
    }
  }, [user]);

  return (
    // <div>
    //   <h1 className="text-center text-3xl font-bold py-8">Sign in</h1>
    //   <div className="max-w-[240px] m-auto py-4">
    //     <GoogleButton onClick={handleGoogleSignIn} />
    //   </div>
    // </div>

    <div className="signbg">
      <div class="container right-panel-active">
        {/* <!-- Sign Up --> */}
        <div class="container__form container--signup">
          <form action="#" class="form" id="form1">
            <GoogleButton onClick={handleGoogleSignIn} />
          </form>
        </div>

        <div class="container__overlay">
          <div class="overlay">
            <div class="overlay__panel overlay--left"></div>
            <div class="overlay__panel overlay--right">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
