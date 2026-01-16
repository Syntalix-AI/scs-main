import React from "react";
import {
  SiNextdotjs,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiGooglecloud,
  SiMicrosoftazure,
  SiJavascript,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaAws,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white", glowColor: "rgba(0,0,0,0.5)" },
  { name: "React", icon: FaReact, color: "text-cyan-500", glowColor: "rgba(6,182,212,0.5)" },
  { name: "Django", icon: SiDjango, color: "text-green-700", glowColor: "rgba(21,128,61,0.5)" },
  { name: "Flask", icon: SiFlask, color: "text-gray-700", glowColor: "rgba(55,65,81,0.5)" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-600", glowColor: "rgba(13,148,136,0.5)" },
  { name: "Python", icon: FaPython, color: "text-yellow-500", glowColor: "rgba(234,179,8,0.5)" },
  { name: "Java", icon: FaJava, color: "text-red-600", glowColor: "rgba(220,38,38,0.5)" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", glowColor: "rgba(250,204,21,0.5)" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-600", glowColor: "rgba(234,88,12,0.5)" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-600", glowColor: "rgba(37,99,235,0.5)" },
  { name: "AWS", icon: FaAws, color: "text-orange-500", glowColor: "rgba(249,115,22,0.5)" },
  { name: "GCP", icon: SiGooglecloud, color: "text-blue-500", glowColor: "rgba(59,130,246,0.5)" },
  { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-600", glowColor: "rgba(37,99,235,0.5)" },
  { name: "Google API", icon: FaGoogle, color: "text-blue-500", glowColor: "rgba(59,130,246,0.5)" },
  { name: "Facebook API", icon: FaFacebook, color: "text-blue-700", glowColor: "rgba(29,78,216,0.5)" },
];

const TechCollaborators = () => {
  return (
    <div className="w-full py-16 bg-background">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-500 text-transparent bg-clip-text font-extrabold drop-shadow-sm">Tech</span> Stack
          </h2>
          
        </div>

        {/* Tech Stack Marquee */}
        <div
          className="group relative flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-12"
              >
                {techStack.map((tech, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-2 group/icon"
                    style={{ filter: `drop-shadow(0 0 8px ${tech.glowColor})` }}
                  >
                    <tech.icon
                      className={`w-12 h-12 ${tech.color} transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:brightness-125`}
                    />
                    <span className="text-xs font-medium text-muted-foreground opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechCollaborators;

