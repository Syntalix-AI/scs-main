import dynamic from "next/dynamic";
import Whyus from "@/components/Home/WhyUs";
import IntroAnimation from "@/components/IntroAnimation";
// import Client from "@/components/Home/client";
import Hero from "@/components/Home/Hero";
// import Experience from "@/components/Home/Experience";
// import AiProducts from "@/components/Home/AiProducts";
import Counter from "@/components/Home/Counter";
// import Gigs from "@/components/Home/Gigs";
// import Testimonials from "@/components/Home/Testimonials";
import Banner from "@/components/Home/Banner";
import FAQ from "@/components/Home/FAQ";
import Whatsapp from "@/components/Whatsapp";
import FadeInSection from "@/components/ui/FadeInSection"; // Import the wrapper

// Dynamically import components that are not immediately visible
const Experience = dynamic(() => import("@/components/Home/Experience"), {
  loading: () => <div className="min-h-[400px] bg-muted animate-pulse" />,
});
const Gigs = dynamic(() => import("@/components/Home/Gigs"), {
  loading: () => <div className="min-h-[400px] bg-muted animate-pulse" />,
});
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"), {
  loading: () => <div className="min-h-[400px] bg-muted animate-pulse" />,
});
const PopupForm = dynamic(() => import("@/components/Home/PopUpForm"));
// const Chatbot = dynamic(() => import("@/components/Chatbot"));
const AnimatedLogoCloud = dynamic(() => import("@/components/Home/logocloud"));
const Domains = dynamic(() =>
  import("@/components/component/domains").then((mod) => mod.Domains),
);
const About = dynamic(() => import("@/components/Home/About"));

export default function Home() {
  return (
    <div className="bg-background">
      {/* IntroAnimation Temporarily Disabled for Performance */}
      <PopupForm />
      
      {/* Main Sections */}
      <Hero />

      <FadeInSection>
        <AnimatedLogoCloud />
      </FadeInSection>

      <FadeInSection>
        <Whyus />
      </FadeInSection>

      <div id="about">
        <FadeInSection>
          <About />
        </FadeInSection>
      </div>

      <FadeInSection>
        <Counter />
      </FadeInSection>

      <FadeInSection>
        <Experience />
      </FadeInSection>

      <div id="services">
        <FadeInSection>
          <Domains />
        </FadeInSection>
      </div>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      <FadeInSection>
        <FAQ />
      </FadeInSection>

      <FadeInSection>
        <Banner />
      </FadeInSection>

      {/* Fixed Widgets (Do not wrap these) */}
      <Whatsapp />
      {/* <Chatbot /> */}
    </div>
  );
}
