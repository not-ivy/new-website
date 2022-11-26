import { useEffect, useState } from "preact/hooks";
import { useLocation } from "wouter";
import { InterfaceWikiEntry } from "../../types/wiki";
import { fetchWikiMetadata, formatDateFromString } from "../../utils/wiki";

export default function TestWikiPage() {
  const [location] = useLocation();
  const [locales, setLocales] = useState(['en-US']);
  const [metadata, setMetadata] = useState<InterfaceWikiEntry | undefined>(undefined);

  useEffect(() => {
    setLocales([...navigator.languages]);
    fetchWikiMetadata('test').then(setMetadata);
    console.log(location);
  }, []);

  if (!metadata) return <>Loading...</>;

  return (
    <div>
      <h3 className="font-mono text-2xl md:text-3xl text-center mb-2">Test Wiki Page</h3>
      <div className="flex flex-col text-xs md:text-sm font-mono justify-center items-end mb-4">
        <span>Created: {formatDateFromString(locales, metadata.created)}</span>
        <span>Edited: {formatDateFromString(locales, metadata.edited)}</span>
      </div>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestias deserunt impedit nulla dicta error nisi magni, dolores, labore reiciendis facere ex, saepe accusamus soluta tenetur eum id veniam delectus.
        <br />
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow
      </p>
    </div>
  )
}