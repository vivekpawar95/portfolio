import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Section from "../../structure/section";
import Container from "../../structure/container";
import Image from "next/image";

import hero from "../../../styles/scss/sections/index/hero.module.scss";
import button from "../../../styles/scss/blocks/button.module.scss";

import content from "../../../content/index/hero.json";
import { BackgroundGradientAnimation } from "../../ui/background-gradient-animation";
// .preHeader {
//   color: var(--secondary);
//   font-family: var(--font-accent);
//   font-size: 1.2rem;
//   font-weight: 400;
//   margin: 1rem 0;
// }
export default function Hero() {
  const [, setTypingStatus] = useState("Initializing");

  return (
    <Section classProp={`${hero.section} `}>
      <BackgroundGradientAnimation>
        <Container spacing={"VerticalXXXL"} classProp="my-32 z-10 relative">
          <TypeAnimation
            className={` absolute top-4 lg:relative font-['Fira_Code',monospace] text-[--secondary] text-sm md:text-2xl font-normal lg:font-normal lg:my-[1rem]`}
            sequence={[
              content.intro.startDelay,
              () => {
                setTypingStatus("typing");
              },
              content.intro.start,
              () => {
                setTypingStatus("typed");
              },
              content.intro.deleteDelay,
              () => {
                setTypingStatus("deleting");
              },
              content.intro.end,
              () => {
                setTypingStatus("deleted");
              },
              content.intro.restartDelay,
            ]}
            speed={content.intro.speed}
            deletionSpeed={content.intro.deletionSpeed}
            wrapper={content.intro.wrapper}
            repeat={Infinity}
          />
          <section className="flex flex-col items-center lg:flex-row justify-between gap-4 mt-20 lg:mt-0">
            <div className="md:max-w-[95%] order-1 lg:order-0">
              <h1
                className={`${hero.header} tracking-normal text-center lg:[text-align:unset]`}
              >
                {content.header.name}
              </h1>
              <h1
                className={`${hero.subheader} ${hero.primaryDim}  tracking-normal !text-sm md:!text-[2rem] text-center lg:[text-align:unset] lg:!-mt-4 lg:!mx-4`}
              >
                {content.header.usp}
              </h1>
              <p className={`${hero.primaryBright} subtitle mt-12`}>
                {content.paragraph}
              </p>
            </div>
            <div className="relative self-center order-0 lg:order-1 ">
              <section className="h-[10rem] w-[10rem] lg:h-[20rem] lg:w-[20rem] bg-transparent   rounded-full  outline outline-2 outline-offset-2 outline-[--secondary]">
                <Image
                  src={"/img/profile-pic.jpg"}
                  width={400}
                  height={400}
                  alt="profile image"
                  className="object-cover rounded-full"
                />
              </section>
            </div>
          </section>
          <section className="mt-2   flex flex-col md:mx-5 lg:mx-0 lg:block">
            <p
              className={`${hero.primaryBright} subtitle md:max-w-[95%] lg:max-w-full`}
            >
              {content.paragraph2}
            </p>
            <p
              className={`${hero.primaryBright} subtitle mt-6 mb-2 md:max-w-[95%] lg:max-w-full`}
            >
              {content.paragraph3}
            </p>
          </section>
          <section
            style={{ position: "relative" }}
            className="flex flex-col gap-4 sm:block mt-4 md:mx-4 lg:mx-0"
          >
            <button
              className={`button ${button.primary}`}
              onClick={() => (window.location = content.buttons.primary.url)}
            >
              {content.buttons.primary.title}
            </button>

            <button
              className={`button ${button.secondary} leaveSite `}
              onClick={() =>
                window.open(content.buttons.secondary.url, "_blank")
              }
            >
              {content.buttons.secondary.title}
            </button>
          </section>
        </Container>
      </BackgroundGradientAnimation>
    </Section>
  );
}
