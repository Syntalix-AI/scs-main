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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-purple-500/30 group"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-700 dark:to-zinc-800 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;