import ErrorSplash from "../ui/ErrorSplash";
import { Suspense, lazy } from 'preact/compat';

export interface Props {
  params: {
    page: string;
  }
}

export default function WikiPageSection({ params }: Props) {
  const { page } = params;

  const WikiPage = lazy(() => import(/* @vite-ignore */ `./wiki/${page}.tsx`));

  return (
    <Suspense fallback={<></>}>
      <WikiPage />
    </Suspense>
  )
}
