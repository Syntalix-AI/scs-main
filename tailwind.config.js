import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    flowbite.content(),
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        syntalix: [
          '"Space Grotesk"',
          '"Inter"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        "syntalix-heading": [
          '"Space Grotesk"',
          '"Inter"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        "syntalix-body": [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        "syntalix-mono": [
          '"SF Mono"',
          '"Monaco"',
          '"Inconsolata"',
          '"Roboto Mono"',
          '"Source Code Pro"',
          "monospace",
        ],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(100.5deg, rgba(57, 18, 241, 0.4) 29.55%, rgba(164, 129, 255, 0.4) 93.8%), radial-gradient(38.35% 93.72% at 18.31% 6.28%, rgba(170, 135, 252, 0.8) 0%, rgba(61, 27, 205, 0.8) 100%)",
        btn: "linear-gradient(100.09deg, #000000 20.61%, #3C3A41 52.31%)",
        "txt-bg":
          "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(270deg, rgba(182, 53, 227, 0.4) 0.5%, #4812E4 100%)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4812E4", // Syntalix Deep Purple
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#A481FF", // Lavender Mist
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F1F5F9", // Slate-100
          foreground: "#64748B", // Slate-500
        },
        accent: {
          DEFAULT: "#F8F9FA", // Pale Silver
          foreground: "#1E293B", // Dark Slate
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        gradient: "gradient 8s linear infinite",
        "logo-cloud": "logo-cloud 30s linear infinite",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin()],
};
