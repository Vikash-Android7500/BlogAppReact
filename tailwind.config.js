/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      slate: {
        100: "#f1f5f9",
      },
      green: {
        200: "#bbf7d0",
        500: "#22c55e",
        900: "#14532d",
      },
      blue: {
        100: "#dbeafe",
        800: "#1e40af",
      },

      orange: {
        400: "#fb923c",
        500: "#f97316",
      },
      white: "#FFFFFF",
    },

    extend: {
      animation: {
        spinnerVK: "spin 2s linear infinite",
      },

      keyframes: {
        spinnerVK: {
          to: {
            transform: "rotate(1turn)",
          },
        },
      },
    },
  },
  plugins: [],
};
