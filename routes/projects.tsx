import { PageProps } from "$fresh/server.ts";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx";
import IconLemon2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandNextjs from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-nextjs.tsx";
import IconDatabase from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/database.tsx";
import IconLock from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lock.tsx";
import IconSourceCode from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/source-code.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-left.tsx";

export default function Projects(props: PageProps) {
  return (
    <main class="p-10 mx-auto max-w-screen-sm">
      <h1 class="font-medium text-2xl text-center">Projects</h1>
      <a href="/">
        <span class="flex items-center gap-x-4">
          <IconChevronLeft class="w-5 h-auto" />
          <span>Go Home</span>
        </span>
      </a>
      <hr class="border-gray-600 border-dashed my-8" />
      <div>
        <img
          src="/melon.webp"
          class="rounded-lg shadow-lg"
          alt="A screenshot of the landing page of melon; a link shortener"
        />
        <a href="https://m.not-ivy.dev">
          <h2 class="text-xl text-center mt-4 underline">Melon</h2>
        </a>
        <h3 class="text-center text-sm">A sweet link shortener.</h3>
        <div class="flex items-center justify-center gap-x-6 w-full mx-auto mt-2">
          <span class="flex gap-x-2 items-center">
            <IconBrandDeno class="w-6 h-auto" />
            <span>Deno</span>
          </span>
          <span class="flex gap-x-2 items-center">
            <IconLemon2 class="w-6 h-auto" />
            <span>Fresh</span>
          </span>
          <span class="flex gap-x-2 items-center">
            <IconBrandGithub class="w-6 h-auto" />
            <span>GitHub Gists</span>
          </span>
          <a href="https://github.com/not-ivy/melon">
            <span class="flex gap-x-2 items-center">
              <IconSourceCode class="w-6 h-auto" />
              <span>Source Code</span>
            </span>
          </a>
        </div>
      </div>
      <div class="mt-8">
        <img
          src="/sparrow.webp"
          class="rounded-lg"
          alt="A screenshot of the landing page of project sparrow; a social media platform."
        />
        <a href="https://sparrowsocial.com">
          <h2 class="text-xl text-center mt-4 underline">Project Sparrow</h2>
        </a>
        <h3 class="text-center text-sm">A modern social media.</h3>
        <div class="flex items-center justify-center gap-x-6 w-full mx-auto mt-2">
          <span class="flex gap-x-2 items-center">
            <IconBrandNextjs class="w-6 h-auto" />
            <span>Next.JS</span>
          </span>
          <span class="flex gap-x-2 items-center">
            <IconDatabase class="w-6 h-auto" />
            <span>Vercel Postgres</span>
          </span>
          <span class="flex gap-x-2 items-center">
            <IconLock class="w-6 h-auto" />
            <span>Lucia Auth</span>
          </span>
        </div>
      </div>
    </main>
  );
}
