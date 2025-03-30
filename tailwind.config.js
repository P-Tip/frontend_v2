/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "ptu-red": "#EE0031",
        "ptu-gray": "#f8f9fA",
        "ptu-blue": "#425ad5",
        "ptu-blue-hover": "#425ad5",
        "ptu-default-black": "#3f4750",
        "ptu-green": "#2da87a",
        "ptu-green-hover": "#009b64",
        "ptu-grey-text": "#8C8C8C",
        "ptu-grey-line": "#F5F5F5",
      },
      backgroundColor: {
        "ptu-blue-bg": "#f3f6ff",
        "ptu-blue-bg-hover": "#e5eaff",
        "ptu-green-bg": "#009B64", // 이전 ptu-blue-bg를 연한 녹색 배경으로 변경
        "ptu-green-bg-hover": "#c7e9d8", // 이전 ptu-blue-bg-hover를 약간 더 진한 녹색 배경으로 변경
        "ptu-light-green-bg": "#DDEDE2",
      },
      screens: {
        desktop: "960px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
