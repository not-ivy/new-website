import { Link, useLocation } from "wouter";
import ColorLink from "./ColorLink";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <div className="flex justify-between items-center">
      <ul className="flex flex-col items-end font-mono text-xl w-screen-sm mx-auto">
        <li><ColorLink href="/" label="Home" /></li>
        <li><ColorLink href="/knowledge" label="Knowledge" /></li>
        <li><ColorLink href="/projects" label="Projects" /></li>
        <li><ColorLink href="/socials" label="Socials" /></li>
      </ul>
    </div>
  )
}
