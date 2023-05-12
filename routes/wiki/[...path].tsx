import type { Handlers, PageProps } from "$fresh/server.ts";
import { html, tokens } from "https://deno.land/x/rusty_markdown@v0.4.1/mod.ts";
import { Head } from "$fresh/runtime.ts";

interface IMarkdownDocument {
  title: string;
  content: string;
}

export const handler: Handlers<IMarkdownDocument | null> = {
  async GET(_, ctx) {
    const { params } = ctx;
    try {
      const file = await Deno.readTextFile(`./routes/wiki/${params.path}.md`);
      const tokenized = tokens(file, {
        tables: true,
        footnotes: true,
      });
      const content = html(tokenized);
      return ctx.render({
        title: params.path,
        content,
      });
    } catch (e) {
      if (e.code === "ENOENT") return ctx.render(null);
      return ctx.render(e);
    }
  },
};

export default function WikiPage({
  data,
}: PageProps<IMarkdownDocument | null | Error>) {
  if (data instanceof Error) {
    return (
      <>
        <Head>
          <title>500 Internal Server Error</title>
        </Head>
        <main class="w-screen h-screen flex justify-center items-center flex-col gap-y-4">
          <h1 class="font-medium text-5xl">500 Internal Service Error</h1>
          <h2 class="font-medium text-lg">¯\_(ツ)_/¯</h2>
          <pre class="text-red-500">{data.stack}</pre>
        </main>
      </>
    );
  }
  if (!data) {
    return (
      <Head>
        <meta http-equiv="refresh" content="0; url=/404" />
      </Head>
    );
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/markdown.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-light.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-typescript.min.js" />
        <title>{data.title}</title>
      </Head>
      <main dangerouslySetInnerHTML={{ __html: data.content }} class="p-10" />
    </>
  );
}
