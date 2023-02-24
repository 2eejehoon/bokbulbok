import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

export default function CustomHead({ title }: CustomHeadProps) {
  return (
    <Head>
      <title>{`복불복 | ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
