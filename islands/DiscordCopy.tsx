import IconBrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/brand-discord.tsx";

interface DiscordCopyProps {
  content: string;
}

export default function DiscordCopy(props: DiscordCopyProps) {
  const copy = () => {
    navigator.clipboard.writeText(props.content);
    alert("Copied.");
  };
  return (
    <button onClick={copy} title="Discord handle(click to copy): lost_centauri">
      <IconBrandDiscord class="w-6 h-auto" />
    </button>
  );
}
