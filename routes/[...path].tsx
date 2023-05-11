import { Head } from "$fresh/runtime.ts";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <main class="w-screen h-screen flex justify-center items-center flex-col gap-y-4">
        <h1 class="font-medium text-5xl">404 Not Found</h1>
        <h2 class="font-medium text-lg">龴ↀ◡ↀ龴</h2>
      </main>
    </>
  );
}
