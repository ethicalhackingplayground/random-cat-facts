import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className=" dark w-screen max-w-screen-full h-screen max-h-screen-full flex flex-col items-center justify-center">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
