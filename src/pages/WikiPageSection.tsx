import { useEffect, useState } from "preact/hooks";
import ErrorSplash from "../ui/ErrorSplash";

export interface Props {
  params: {
    page: string;
  }
}

export default function WikiPageSection({ params }: Props) {
  const { page } = params;

  const [wiki, setWiki] = useState<string | undefined | Error>(undefined);

  useEffect(() => {
    fetch(`/wiki/${page}.txt`)
      .then((res) => {
        if (res.status === 404) throw new Error("Page not found");
        return res.text();
      })
      .then((text) => setWiki(text))
      .catch((err) => setWiki(err));
  }, []);

  if (!wiki) return <h1>Loading...</h1>;
  if (wiki instanceof Error) return <ErrorSplash message={wiki.message} />;

  return (
    <div>
      <h3>{page}</h3>
      {wiki}
    </div>
  )
}
