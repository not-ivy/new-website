import { useEffect, useState } from "preact/hooks";
import { Link } from "wouter";
import { InterfaceWiki } from "../types/wiki";
import ErrorSplash from "../ui/ErrorSplash";
import { formatDateFromString } from "../utils/wiki";

export default function WikiIndexSection() {
  const [locales, setLocales] = useState(["en-US"]);
  const [metadata, setMetaData] = useState<InterfaceWiki | undefined>(undefined);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  useEffect(() => {
    setLocales([...navigator.languages]);
    fetch('/wiki.json')
      .then((res) => res.json())
      .then(setMetaData);
  }, []);

  if (!metadata) return <ErrorSplash message="An error occurred." />;

  return (
    <div>
      <h3 className="text-center font-mono text-2xl md:text-3xl mb-4">Wiki Index</h3>
      <ul>
        {
          Object.keys(metadata).map((page, index) => (
            <li className="flex gap-x-2 items-baseline">
              <span className="font-mono text-base md:text-lg">{alphabet[index % 26].toUpperCase()}:</span>
              <Link to={`/wiki/${page}`} key={index}>
                <span className="underline cursor-pointer text-base md:text-lg">{page}</span>
              </Link>
              <div className="flex gap-x-2 text-xs md:text-sm items-center text-gray">
                <span>Created: {formatDateFromString(locales, metadata[page].created)}</span>
                <span>|</span>
                <span>Edited: {formatDateFromString(locales, metadata[page].edited)}</span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}