import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimatedComponentRight from "../../animations/AnimationRigth";

export default function MiddleSchoolLifeImages() {
  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2 place-items-center max-w-7xl mx-auto lg:grid-cols-4 pt-20 pb-32 px-5">
          <AnimatedComponentLeft>
            <img
              className="h-80 w-64 rotate-6"
              // src="https://c8.alamy.com/comp/2RM7BNB/happy-kid-and-headphones-with-tablet-in-bedroom-to-watch-movies-video-game-and-elearning-app-boy-child-smile-with-digital-technology-for-multimedia-2RM7BNB.jpg"
              src={"/boy.jpg"}
              alt="image"
            />
          </AnimatedComponentLeft>
          <AnimationBottom>
            <img
              className="h-80 w-72 -rotate-3"
              src={"/Family.jpg"}
              alt="image"
            />
          </AnimationBottom>
          <AnimationBottom>
            <img
              className="h-80 w-64 rotate-6"
              src={"/Student_Life.jpg"}
              alt="image"
            />
          </AnimationBottom>
          <AnimatedComponentRight>
            <img
              className="h-80 w-72 -rotate-6"
              src={"/family2.jpg"}
              alt="image"
            />
          </AnimatedComponentRight>
        </div>
      </div>
      );
    </div>
  );
}
