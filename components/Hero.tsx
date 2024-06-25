import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FlipWords } from "./ui/FlipWords";
import { Vortex } from "./ui/vortex";
import { SparklesCore } from "./ui/sparkles";

const Hero = () => {
  const words = ["Flexible", "Dynamic", "Modern", "Versatile", "Seamless", "Scalable"];
  return (
    <Vortex className="pb-20 pt-36 " backgroundColor="black" rangeY={800} particleCount={150}>
      {/* // <div className="pb-20 pt-36 ">  */}
      <div className="h-screen w-screen flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs my-2 text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <div>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Ideas into "
            />

            <FlipWords className="text-center text-[40px] md:text-5xl lg:text-6xl" words={words} />

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="User Experiences"
            />
          </div>

          <p className="text-center md:tracking-wider my-4 mt-3 text-sm md:text-lg lg:text-2xl ">
            Hi, I&apos;m Aryan Biswas, a Software Developer based in Pune-India.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="tracking-wide text-md"
            />
          </a>
        </div>
      </div>
    {/* </div> */}
    </Vortex>
  );
};

export default Hero;
