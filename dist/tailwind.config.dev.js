"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"]
    },
    backgroundImage: {
      "pack-train": "url('../src/images/bg.svg')",
      "pack-train1": "url('../src/images/bg2.svg')",
      "pack-train2": "url('../src/images/bg3.svg')",
      "pack-train5": "url('../src/images/overlay.png')",
      "pack-train6": "url('../src/images/bg5.png')",
      "pack-train3": "url('https://alephzero.org/aleph-design/images/link-boxes-bg-1.svg?03d9a6d9a8c01215294a026c0af9ffd9')"
    },
    "pack-train6": "url('../src/images/bg5.png')",
    "pack-overlay": "url('../src/images/overlay1.png')"
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("tailwind-scrollbar-hide")]
};