/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
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
        "brand-green": "#2da87a",
        "brand-green-dark": "#009b64",
        "brand-green-light": "#3bb87a",
        "brand-bg": "#f8f9fa",
        "brand-surface": "#ffffff",
        "brand-text-primary": "#333333",
        "brand-text-secondary": "#8C8C8C",
        "brand-border": "#F5F5F5",
        "tag-red-bg": "#FFE0E0",
        "tag-red-text": "#FF6767",
        "tag-green-bg": "#DDEDE2",
        "tag-green-text": "#2da87a",
        "tag-blue-bg": "#E0F2FF",
        "tag-blue-text": "#0066CC",
        "ptu-green": "#2da87a",
        "ptu-green-dark": "#009b64",
        "ptu-text": "#333333",
        "ptu-text-light": "#8C8C8C",
        "ptu-bg": "#f8f9fa",
        "ptu-surface": "#ffffff",
      },
      screens: {
        desktop: "960px",
      },
    },
  },
  plugins: [],
};
