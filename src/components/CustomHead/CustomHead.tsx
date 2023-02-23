import Head from "next/head";
import { useRouter } from "next/router";

export default function CustomHead() {
  const { pathname } = useRouter();

  return (
    <Head>
      <title>{`복불복 | ${pathname.slice(1)}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
