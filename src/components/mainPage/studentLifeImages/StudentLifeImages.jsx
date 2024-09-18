import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";
export const StudentLifeImages = () => {
  return (
    <div>
      {/* <div className="grid md:grid-cols-1 place-items-center max-w-3xl mx-auto lg:grid-cols-1 pt-10 pb-5 px-5 ">
        {/* <AnimationPopUp>
          {" "}
          <Button link={"/#"} title={" Student's Life "}>
            Life at an online school{" "}
          </Button>
        </AnimationPopUp> */}
      {/* </div> * */}
      <div className="grid md:grid-cols-2 place-items-center max-w-7xl mx-auto lg:grid-cols-4 pt-20 pb-32 px-5">
        <AnimatedComponentLeft>
          <img
            className="h-64 w-64 rotate-6"
            src="/newImges/1.jpg"
            alt="image"
          />
        </AnimatedComponentLeft>
        <AnimationBottom>
          <img
            className="h-64 w-72 -rotate-3"
            src="/newImges/3.jpg"
            alt="image"
          />
        </AnimationBottom>
        <AnimationBottom>
          <img className="h-64 w-64 rotate-6" src="/03.jpg" alt="image" />
        </AnimationBottom>
        <AnimatedComponentRight>
          <img
            className="h-64 w-72 -rotate-6"
            src="/hijab-girl.jpg"
            alt="image"
          />
        </AnimatedComponentRight>
      </div>
    </div>
  );
};
