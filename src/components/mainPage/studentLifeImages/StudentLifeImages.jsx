import React from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimatedComponentRight from "../../animations/AnimationRigth";

export const StudentLifeImages = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 place-items-center max-w-7xl mx-auto lg:grid-cols-4 pt-20 pb-32 px-5">
        <AnimatedComponentLeft>
          <img className="h-80 w-64 rotate-6" src="/07.jpg" alt="image" />
        </AnimatedComponentLeft>
        <AnimationBottom>
          <img className="h-80 w-72 -rotate-3" src="/02.jpg" alt="image" />
        </AnimationBottom>
        <AnimationBottom>
          <img className="h-80 w-64 rotate-6" src="/03.jpg" alt="image" />
        </AnimationBottom>
        <AnimatedComponentRight>
          <img className="h-80 w-72 -rotate-6" src="/05.jpg" alt="image" />
        </AnimatedComponentRight>
      </div>
    </div>
  );
};
