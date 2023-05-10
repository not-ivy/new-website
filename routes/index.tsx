import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconCircle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle.tsx";
import IconBrandSteam from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-steam.tsx";
import IconCircleKey from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/circle-key.tsx";
import IconArchive from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/archive.tsx";
import IconBook2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/book-2.tsx";
import DiscordCopy from "../islands/DiscordCopy.tsx";

export default function Home() {
  return (
    <main class="p-10 mx-auto max-w-screen-sm">
      <img
        src="https://avatars.githubusercontent.com/u/47074495"
        class="w-24 h-auto rounded-full mx-auto mb-2 select-none"
      />
      <h1 class="text-center text-xl font-medium">
        ivy / <span class="text-gray-400">nora</span>
      </h1>
      <h2 class="text-center text-sm">they/its</h2>
      <div class="flex items-center max-w-min mx-auto gap-x-8 my-3">
        <a href="https://github.com/not-ivy" title="GitHub Profile">
          <IconBrandGithub class="w-6 h-auto" />
        </a>
        <a href="https://sr.ht/~apocalypse" title="Sourcehut Profile">
          <IconCircle class="w-6 h-auto" />
        </a>
        <DiscordCopy content="ivymkii#0004" />
        <a href="https://steamcommunity.com/id/not-ivy/" title="Steam Profile">
          <IconBrandSteam class="w-6 h-auto" />
        </a>
        <a
          href="https://keys.openpgp.org/vks/v1/by-fingerprint/2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32"
          title="OpenPGP Key"
        >
          <IconCircleKey class="w-6 h-auto" />
        </a>
      </div>
      <hr class="border-gray-600 border-dashed my-8" />
      <p class="text-center">
        Hi, I'm Ivy. I like to design and build web applications. I enjoy work
        with TypeScript, React, and Deno. I also work with some other JSX
        libraries such as SolidJS, and Preact, as well as their metaframeworks.
        I also have some experience with Rust, Kotlin, Java, and shell
        scripting.
      </p>
      <div class="flex justify-center items-center mt-4 gap-x-16">
        <a
          class="cursor-pointer px-3 py-2 bg-white rounded hover:bg-gray-200 border border-gray-300 transition-colors flex items-center gap-x-2 select-none"
          href="/projects"
        >
          <IconArchive class="w-6 h-auto" />
          <span>Projects</span>
        </a>
        <a
          class="cursor-pointer px-3 py-2 bg-white rounded hover:bg-gray-200 border border-gray-300 transition-colors flex items-center gap-x-2 select-none"
          href="/wiki"
        >
          <IconBook2 class="w-6 h-auto" />
          <span>Wiki</span>
        </a>
      </div>
    </main>
  );
}
