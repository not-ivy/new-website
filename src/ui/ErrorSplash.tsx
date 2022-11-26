import ExclamationCircle from "./icons/ExclamationCircle";

export interface Props {
  message?: string;
}

export default function ErrorSplash({ message }: Props) {
  return (
    <div className="border-4 border-dashed border-red text-center p-4 mb-8">
      <div className="mb-2 flex items-center justify-center gap-x-4">
        <ExclamationCircle className="w-7 h-7" />
        <h3 className="font-mono text-3xl">Error</h3>
      </div>
      <p>
        Reason: {message ?? 'Unknown error'}
      </p>
    </div>
  )
}