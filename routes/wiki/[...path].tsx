import type { Handlers, PageProps } from "$fresh/server.ts";
import { parseMarkdown } from "https://deno.land/x/markdown_wasm@1.2.2/mod.ts";
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
      const content = parseMarkdown(file);
      return ctx.render({
        title: params.path,
        content,
      });
    } catch (e) {
      console.log(e);
      return ctx.render(e.message);
    }
  },
};

export default function WikiPage({
  data,
}: PageProps<IMarkdownDocument | null>) {
  return data ? (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/markdown.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
        ></link>
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
  ) : (
    <Head>
      <meta http-equiv="refresh" content="0; url=/404" />
    </Head>
  );
}
