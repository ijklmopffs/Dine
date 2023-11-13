/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "bg-desktop": "url('/assets/homepage/hero-bg-desktop.jpg')",
        "bg-tablet": "url('/assets/homepage/hero-bg-tablet.jpg')",
        "bg-mobile": "url('/assets/homepage/hero-bg-mobile.jpg')",
        "bg-desktop-ready": "url('/assets/homepage/ready-bg-desktop.jpg')",
        "bg-tablet-ready": "url('/assets/homepage/ready-bg-tablet.jpg')",
        "bg-mobile-ready": "url('/assets/homepage/ready-bg-mobile.jpg')",
        "bg-mobile-booking": "url('/assets/booking/hero-bg-mobile.jpg')",
        "bg-tablet-booking": "url('/assets/booking/hero-bg-tablet.jpg')",
        "bg-desktop-booking": "url('/assets/booking/hero-bg-desktop.jpg')",
      }),
    },
  },
  plugins: [],
};
