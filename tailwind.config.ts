import { dark } from '@clerk/themes';
import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      ibmPlexSans: ["var(--ibmPlexSans)", "sans-serif"]
    }
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: {
            DEFAULT: "#f9f9f9",
            foreground: "#1f2937"
          },
          primary: {
            DEFAULT: "#10b981",
            foreground: "#1f2937"
          }
        }
      },
      dark: {
        colors: {
          background: {
            DEFAULT: "#010409",
            foreground: "#d1d5db"
          },
          primary: {
            DEFAULT: "#6ee7b7",
            foreground: "#1f2937"
          }
        }
      }
    }
  })],
};
export default config;
// #6ee7b7