import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-left.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Wiki() {
  return (
    <>
      <Head>
        <title>Wiki</title>
      </Head>
      <main class="p-10 mx-auto max-w-screen-sm">
        <h1 class="font-medium text-2xl text-center">Wiki</h1>
        <a href="/">
          <span class="flex items-center gap-x-4 mt-4">
            <IconChevronLeft class="w-5 h-auto" />
            <span>Go Home</span>
          </span>
        </a>
        <hr class="border-dashed my-8" />
        <ul class="list-disc">
          <li>
            <a href="/wiki/test" class="hover:underline">
              test
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
