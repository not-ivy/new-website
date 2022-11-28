import ExternalLink from "./icons/ExternalLink";

interface Props {
  href: string;
  label: string;
}

export default function IconLink({ href, label }: Props) {
  return (
    <a className="font-mono text-2xl hover:underline" href={href}>
      <span>{label}</span>
      <sup><ExternalLink className="w-4 h-4 inline" /></sup>
    </a>
  )
}
