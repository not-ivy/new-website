import ErrorSplash from "../ui/ErrorSplash";
import { Suspense, lazy, useState, useEffect } from 'preact/compat';
import { InterfaceWikiEntry } from "../types/wiki";
import { fetchWikiMetadata, formatDateFromString } from "../utils/wiki";

export interface Props {
  params: {
    page: string;
  }
}

export default function WikiPageSection({ params }: Props) {
  const { page } = params;
  const [locales, setLocales] = useState(['en-US']);
  const [metadata, setMetadata] = useState<InterfaceWikiEntry | undefined | Error>(undefined);
  const WikiPage = lazy(() => import(/* @vite-ignore */ `./wiki/${page}.tsx`));

  useEffect(() => {
    setLocales([...navigator.languages]);
    fetchWikiMetadata(page).then(setMetadata).catch(setMetadata);
  }, []);

  if (!metadata || metadata instanceof Error) return <ErrorSplash message="An error occurred." />;

  return (
    <Suspense fallback={<></>}>
      <WikiPage
        created={formatDateFromString(locales, metadata.created)}
        edited={formatDateFromString(locales, metadata.edited)}
      />
    </Suspense>
  )
}
