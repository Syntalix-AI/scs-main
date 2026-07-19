import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";

export function Domains() {
  return (
    <section className="w-full md:w-[90vw] mx-auto rounded-3xl py-12 md:py-24 lg:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block shadow rounded-full border cursor-pointer select-none border-primary/50 bg-muted dark:bg-slate-800 px-4 py-1 text-sm text-muted-foreground dark:text-slate-200">
            Explore Our Expertise ✨
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Services{" "}
            </span>
            we offer
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          <Collapsible className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
            <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 text-lg font-medium [&[data-state=open]>svg]:rotate-180">
              <span>AI and ML Solutions</span>
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 px-6 pb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/services/llm-engineering" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg pb-2 font-semibold group-hover:text-primary transition-colors">
                    Large Language Models (LLMs)
                  </h3>
                  <p className="text-muted-foreground">
                    Leverage the power of large language models for a wide range
                    of AI applications, from natural language processing to
                    content generation.
                  </p>
                </Link>
                <Link href="/services/ai-ml-infrastructure" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg pb-2 font-semibold group-hover:text-primary transition-colors">
                    Computer Vision
                  </h3>
                  <p className="text-muted-foreground">
                    Unlock the potential of computer vision for image and video
                    analysis, object detection, and more.
                  </p>
                </Link>
                <Link href="/services/ai-ml-infrastructure" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg pb-2 font-semibold group-hover:text-primary transition-colors">
                    Predictive Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Harness the power of predictive analytics to make
                    data-driven decisions and drive business growth.
                  </p>
                </Link>
                <Link href="/services/agentic-systems" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg pb-2 font-semibold group-hover:text-primary transition-colors">
                    AI Chatbots
                  </h3>
                  <p className="text-muted-foreground">
                    Implement intelligent chatbots for customer service, lead generation,
                    and 24/7 support automation.
                  </p>
                </Link>
                <Link href="/services/ai-consulting" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg pb-2 font-semibold group-hover:text-primary transition-colors">
                    AI Consulting
                  </h3>
                  <p className="text-muted-foreground">
                    Strategic AI consulting to help identify high-ROI opportunities and build implementation roadmaps.
                  </p>
                </Link>
                <Link href="/services/aeo-optimization" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg pb-2 font-semibold group-hover:text-primary transition-colors">
                    Answer Engine Optimization (AEO)
                  </h3>
                  <p className="text-muted-foreground">
                    Get your brand cited by AI engines like ChatGPT and Perplexity through technical AEO and entity optimization.
                  </p>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border bg-background shadow">
            <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 text-lg font-medium [&[data-state=open]>svg]:rotate-180">
              <span>Web Development</span>
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 px-6 pb-4">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">E-commerce Websites</h3>
                  <p className="text-muted-foreground">
                    Build custom e-commerce solutions to power your online
                    business, with features like shopping carts, payment
                    gateways, and inventory management.
                  </p>
                </Link>
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    Corporate Websites
                  </h3>
                  <p className="text-muted-foreground">
                    Create professional corporate websites that showcase your
                    brand, services, and company information.
                  </p>
                </Link>
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    Web Applications
                  </h3>
                  <p className="text-muted-foreground">
                    Develop custom web applications for business processes,
                    customer management, and internal operations.
                  </p>
                </Link>
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    Progressive Web Apps
                  </h3>
                  <p className="text-muted-foreground">
                    Build modern PWAs that work offline and provide app-like
                    experiences on any device.
                  </p>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border bg-background shadow">
            <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 text-lg font-medium [&[data-state=open]>svg]:rotate-180">
              <span>Mobile Development</span>
              <ChevronDownIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 px-6 pb-4">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">iOS Apps</h3>
                  <p className="text-muted-foreground">
                    Develop high-performance, user-friendly iOS applications
                    that leverage the latest Apple technologies and frameworks.
                  </p>
                </Link>
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">Android Apps</h3>
                  <p className="text-muted-foreground">
                    Create engaging and feature-rich Android applications that
                    provide a seamless user experience across a wide range of
                    devices.
                  </p>
                </Link>
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">Cross-platform Apps</h3>
                  <p className="text-muted-foreground">
                    Build cross-platform mobile applications that run on both
                    iOS and Android, leveraging technologies like React Native
                    or Flutter.
                  </p>
                </Link>
                <Link href="/services/web-mobile-development" className="border-2 border-dashed p-4 pb-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-md shadow hover:border-primary/40 rounded-lg group">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">Enterprise Apps</h3>
                  <p className="text-muted-foreground">
                    Develop secure and scalable enterprise mobile applications
                    for internal business operations and employee management.
                  </p>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}