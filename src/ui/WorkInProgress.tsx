import Pencil from "./icons/Pencil";

export default function WorkInProgress() {
  return (
    <div className="border-4 border-dashed border-yellow text-center p-4 mb-8">
      <div className="mb-2 flex items-center justify-center gap-x-4">
        <Pencil className="w-6 h-6" />
        <h3 className="font-mono text-3xl">Warning</h3>
      </div>
      <p>
        This section is still a work in progress. More content will be added soon.
      </p>
    </div>
  )
}