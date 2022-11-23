import WarningTriangle from "./icons/WarningTriangle";

export default function WorkInProgress() {
  return (
    <div className="border-4 border-dashed border-palette-magenta text-center p-4 mb-8">
      <div className="mb-2 flex items-end justify-center">
        <WarningTriangle />
        <h3 className="font-mono text-3xl">Warning</h3>
      </div>
      <p>
        This section is still a work in progress. More content will be added soon.
      </p>
    </div>
  )
}