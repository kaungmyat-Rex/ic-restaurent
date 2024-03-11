export default function manifest() {
  return {
    name: "IC Restaurent",
    short_name: "IC",
    description: "IC Restaurent Food and Beer",
    start_url: "/",
    display: "standalone",
    background_color: "#1b1828",
    theme_color: "#26a0d9",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
