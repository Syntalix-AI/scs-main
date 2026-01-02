import React from "react";
import Image from "next/image";
import img1 from "/assets/Experience/1.png";
import img2 from "/assets/Experience/2.png";
import img3 from "/assets/Experience/3.png";
import img4 from "/assets/Experience/4.png";
import img5 from "/assets/Experience/5.png";
import img6 from "/assets/Experience/6.png";

const services = [
  {
    id: 1,
    icon: img1,
    title: "ChatGPT Application Developers",
    description: "Development of ChatGPT-based apps",
  },
  {
    id: 2,
    icon: img2,
    title: "Stable Diffusion Artists",
    description: "Prompt engineering and editing for photo-realistic visuals",
  },
  {
    id: 3,
    icon: img3,
    title: "DALL-E Artists",
    description: "Prompt engineering and editing for detailed visuals",
  },
  {
    id: 4,
    icon: img4,
    title: "AI Chatbot Developers",
    description: "Development of AI-powered chatbots for your website or mobile app",
  },
  {
    id: 5,
    icon: img5,
    title: "AI Mobile Application Developers",
    description: "Integration of AI into mobile apps",
  },
  {
    id: 6,
    icon: img6,
    title: "Midjourney Artists",
    description: "Prompt engineering and editing for artistic visuals",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-zinc-100 relative inline-block">
            Experts with all the intelligence
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-purple-600 rounded-full"></span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Browse freelancers who’ve got all the generative AI platforms down to get your idea up and running.
          </p>
    <div className="flex flex-col p-9 space-y-14">
      <div className="flex flex-col items-center pl-14 w-full max-md:pl-5 max-md:max-w-full mx-auto">
        <div className=" text-4xl md:text-6xl font-bold text-zinc-700 dark:text-zinc-100 mx-auto">
          Experts with all the intelligence
        </div>
        <div className="mt-7 text-lg text-zinc-500 dark:text-zinc-400 max-md:max-w-full mx-auto">
          Browse freelancers who’ve got all the generative AI platforms down to get your idea up and running

        </div>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-center max-md:mt-10">
                <Image
                  loading="lazy"
                  alt=""
                  src={img1}
                  className="self-center max-w-full aspect-square w-[100px] dark:invert rounded-xl"
                />
                <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700 dark:text-zinc-100">
                  ChatGPT Application Developers
                </div>
                <div className="mt-2 text-base tracking-normal leading-6 text-neutral-500 dark:text-neutral-400">
                  Development of ChatGPT-based apps
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center max-md:mt-10">
                <Image
                  loading="lazy"
                  alt=""
                  src={img2}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                  Stable Diffusion Artists
                </div>
                <div className="self-stretch mt-3 text-base tracking-normal leading-6 text-neutral-500 dark:text-neutral-400">
                  Prompt engineering and editing for photo-realistic visuals
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-center max-md:mt-10">
                <Image
                  loading="lazy"
                  alt=""
                  src={img3}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                  DALL-E Artists
                </div>
                <div className="self-stretch mt-3 text-base tracking-normal leading-6 text-neutral-500 dark:text-neutral-400">
                  Prompt engineering and editing for detailed visuals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-center max-md:mt-10">
              <Image
                loading="lazy"
                alt=""
                src={img4}
                className="self-center max-w-full aspect-square w-[100px]"
              />
              <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                AI Chatbot Developers
              </div>
              <div className="self-stretch mt-2 text-base max-w-72 text-center mx-auto tracking-normal leading-6 text-neutral-500 dark:text-neutral-400">
                Development of AI-powered chatbots for your website or mobile
                app
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-center max-md:mt-10">
              <Image
                loading="lazy"
                alt=""
                src={img5}
                className="self-center max-w-full aspect-square w-[100px]"
              />
              <div className="self-stretch mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700 dark:text-zinc-100">
                AI Mobile Application Developers
              </div>
              <div className="mt-2 text-base tracking-normal leading-6 text-neutral-500">
                Integration of AI into mobile apps
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-center max-md:mt-10">
              <Image
                loading="lazy"
                alt=""
                src={img6}
                className="self-center max-w-full aspect-square w-[100px]"
              />
              <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700 dark:text-zinc-100">
                Midjourney Artists
              </div>
              <div className="self-stretch mt-2 text-base tracking-normal leading-6 text-neutral-500 dark:text-neutral-400">
                Prompt engineering and editing for artistic visuals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;