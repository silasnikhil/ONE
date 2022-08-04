import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const Button = () => {
  const buttonText = [
    "Let's go!",
    "Let's get it!",
    "Heck, yes!",
    "Great, take me there!",
  ];
  const random = Math.floor(Math.random() * 4);
  return (
    <div className=" mt-10 pt-10">
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="light"
          size="lg"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          <span className="text-indigo-400">{buttonText[random]}</span>
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

export default Button;
