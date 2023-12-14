import { RecoilEnv } from "recoil";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";
import Script from "next/script";
import { setPathToSessionStorage } from "@/utils/storage";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { PopoverProvider } from "@/components/Popover/Popover";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: true,
          },
        },
      })
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => setPathToSessionStorage(), [router.asPath]);

  return (
    <QueryClientProvider client={queryClient}>
      <Script
        strategy={"beforeInteractive"}
        type={"text/javascript"}
        src={
          "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
          process.env.NEXT_PUBLIC_MAP_KEY
        }
      />
      <GlobalStyle />
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
