import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import "@/styles/bubbles.scss"
import { createContext, useState } from "react";
import colourModeContext from "@/config/contexts";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [currentTheme, setCurrentTheme] = useState('');
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <colourModeContext.Provider value={{currentTheme, setCurrentTheme}}>
        <Component {...pageProps} />
        </colourModeContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
