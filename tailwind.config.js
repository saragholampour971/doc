/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#FCF8E8",
        "base-green": "#94B49F",
        "base-orange": "#ECB390",
        "base-dark-orange": "#DF7861",
        "base-gray": "#9F9FA0",
        "dark-blue": "#15173D",
        "green-blue": "#88BDB5",
        "red-dark": "#B31E23",
        "sky-blue": "#55ABF8",
      },
      borderRadius: {
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        5.5: "1.375rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        5: "5px",
      },
    },
  },
  plugins: [],
};
