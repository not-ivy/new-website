import type { Handlers, PageProps } from "$fresh/server.ts";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-left.tsx";
import { Head } from "$fresh/runtime.ts";

interface IWikiEntry {
  name: string;
  mtime: Date | null;
}

export const handler: Handlers<IWikiEntry[]> = {
  GET(_, ctx) {
    const files = [...Deno.readDirSync("./routes/wiki")]
      .filter((file) => file.isFile && file.name.endsWith(".md"))
      .map((file) => ({
        name: file.name.replace(".md", ""),
        mtime: Deno.statSync(`./routes/wiki/${file.name}`).mtime,
      }));
    return ctx.render(files);
  },
};

export default function Wiki({ data }: PageProps<IWikiEntry[]>) {
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
          {data.map((file) => (
            <li>
              <span class="flex items-center justify-between">
                <a href={`/wiki/${file.name}`} class="hover:underline">
                  {file.name}
                </a>
                <span class="text-sm">
                  Last modified: {file.mtime?.toLocaleString()}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
