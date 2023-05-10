import { Head } from "$fresh/runtime.ts";
import type { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>Ivy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/utils.css" />
      </Head>
      <props.Component />
    </>
  );
}
