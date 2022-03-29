import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";

import createEmotionCache from "@utils/emotionCache";
import lightTheme from "@styles/theme/lightTheme";

import "@styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

export type _AppType = AppProps & { emotionCache: EmotionCache };

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: _AppType) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default MyApp;
