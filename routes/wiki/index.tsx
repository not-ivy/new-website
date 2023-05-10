import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-left.tsx";

export default function Wiki() {
  return (
    <main class="p-10 mx-auto max-w-screen-sm">
      <h1 class="font-medium text-2xl text-center">Wiki</h1>
      <a href="/">
        <span class="flex items-center gap-x-4 mt-4">
          <IconChevronLeft class="w-5 h-auto" />
          <span>Go Home</span>
        </span>
      </a>
      <hr class="border-dashed my-8" />
      <ul class="list-disc grid grid-cols-3 grid-flow-row">
        <li>
          <a href="/wiki/test" class="underline">
            Test page(only this works currently)
          </a>
        </li>
        <li>
          <a href="/wiki/deno" class="underline">
            Deno
          </a>
        </li>
        <li>
          <a href="/wiki/deno" class="underline">
            Fresh
          </a>
        </li>
        <li>
          <a href="/wiki/deno" class="underline">
            Fresh
          </a>
        </li>
        <li>
          <a href="/wiki/deno" class="underline">
            React
          </a>
        </li>
        <li>
          <a href="/wiki/deno" class="underline">
            Preact
          </a>
        </li>
      </ul>
    </main>
  );
}
