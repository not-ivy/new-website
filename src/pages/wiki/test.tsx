import { InterfaceWikiEntry } from "../../types/wiki";

export default function TestWikiPage({ created, edited }: InterfaceWikiEntry) {
  return (
    <div>
      <h3 className="font-mono text-2xl md:text-3xl text-center mb-2">Test Wiki Page</h3>
      <div className="flex flex-col text-xs md:text-sm font-mono justify-center items-end mb-4">
        <span>Created: {created}</span>
        <span>Edited: {edited}</span>
      </div>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestias deserunt impedit nulla dicta error nisi magni, dolores, labore reiciendis facere ex, saepe accusamus soluta tenetur eum id veniam delectus.
        <br />
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow
      </p>
    </div>
  )
}