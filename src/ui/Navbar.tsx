import { useEffect, useState } from 'preact/hooks';
import ColorLink from "./ColorLink";

export interface Props {
  collapsed: boolean;
}

export default function Navbar({ collapsed }: Props) {
  const [phrases, setPhrases] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    fetch('/ivy.txt')
      .then((res) => res.text())
      .then((text) => {
        setPhrases(text.split('\n'));
      });
  }, []);

  return (
    <div className={`justify-between items-center ${collapsed ? 'hidden' : 'flex'}`}>
      <div className="font-mono flex flex-col">
        {
          phrases ? phrases[Math.floor(Math.random() * phrases.length)].split(' ').map((word, j) => (
            <span className="text-lg">
              <span className="text-palette-magenta" key={`${j}1`}>{word[0].toUpperCase()}</span>
              <span className="inline" key={`${j}2`}>{word.substring(1)}</span>
            </span>
          )) : (
            <>
              <span>I</span>
              <span>V</span>
              <span>Y</span>
            </>
          )
        }
      </div>
      <ul className="flex flex-col items-end font-mono text-lg">
        <li><ColorLink href="/" label="Home" /></li>
        <li><ColorLink href="/knowledge" label="Knowledge" /></li>
        <li><ColorLink href="/projects" label="Projects" /></li>
        <li><ColorLink href="/socials" label="Socials" /></li>
        <li><ColorLink href="/wiki" label="Wiki" /></li>
      </ul>
    </div>
  )
}
