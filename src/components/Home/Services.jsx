import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "AI Consulting",
    description: "Transform your business with cutting-edge AI solutions. We help you leverage artificial intelligence to automate processes, gain insights, and stay ahead of the competition.",
    image: "/services/ai-consulting.png",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Web Development",
    description: "Create stunning, responsive websites that engage your audience. Our expert team delivers modern web solutions that drive results.",
    image: "/services/web-development.png",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Mobile Apps",
    description: "Build powerful mobile applications that users love. We develop native and cross-platform apps that deliver exceptional user experiences.",
    image: "/services/mobile-apps.png",
    gradient: "from-pink-600 to-red-600"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white px-4 py-2 text-sm font-medium hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg hover:shadow-xl">
                  Learn More
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 