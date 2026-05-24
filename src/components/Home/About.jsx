import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center md:text-start">
              <h2 className="text-4xl font-bold  md:text-6xl tracking-tighter">
                <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>

              <p className="sm:mt-4 text-sm py-2 sm:text-lg text-muted-foreground ">
                Syntalix is a software development company that specializes in
                building web and mobile applications integrated with AI and
                Machine Learning. We are a team of experienced developers and
                designers who are passionate about creating innovative solutions
                for businesses of all sizes.
              </p>

              <div className="mt-4 md:mt-8">
                <button className="md:px-6 inline-flex items-center sm:text-lg py-2 px-4 md:py-3 text-white bg-purple-600 rounded-full active:scale-95 hover:bg-purple-700 focus:outline-none">
                  Learn More <ArrowUpRight size={26} className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid sm:h-[75svh] overflow-hidden gap-4 grid-cols-1 lg:grid-cols-2">
            <Image
              alt="Syntalix team collaborating on AI and software development projects"
              width={500}
              height={500}
              src="https://assets.lummi.ai/assets/QmSQaJeNHnUegnWhg1x4mxjZS4PkuPsAnRTEhCDkbvHpBE?auto=format&w=1500"
              className="w-full object-cover hover:scale-110 transition-all duration-500 sm:h-56 md:h-full"
            />

            <Image
              alt="Modern software development workspace with AI and machine learning tools"
              width={500}
              height={500}
              src="https://assets.lummi.ai/assets/QmbUPm3NJ2B3MfhV2ue6VK6KH1KUkjB24JmEkJAMk3ZrZj?auto=format&w=1500"
              className="w-full hidden sm:block object-cover hover:scale-110 transition-all duration-500 sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
