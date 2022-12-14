import { Link } from "wouter";
import ExternalLink from "../ui/icons/ExternalLink";

export default function KnowledgeSection() {
  return (
    <div>
      <h3 className="text-xl md:text-2xl mb-2 font-semibold font-mono">Languages</h3>
      <p className="text-base md:text-lg">
        My primary languages are <span className="text-palette-magenta">TypeScript</span> and <span className="text-palette-magenta">JavaScript</span>,
        which are primarly used for web development, although sometimes I make libaries or discord bots with them.<br />
        I also have some knowledge of <span className="text-palette-yellow">Rust</span> which were used for some simple tools and backend services.<br />
        For Minecraft mod developing, I prefer <span className="text-palette-magenta">Kotlin</span> and <span className="text-palette-magenta">Java</span>.<br />
        I also use <span className="text-palette-cyan">shell script</span> for simple automation tasks and scripting.
      </p>

      <br />

      <h3 className="text-xl md:text-2xl mb-2 font-semibold font-mono">Tools</h3>
      <p className="text-base md:text-lg">
        Almost all of my projects are made using <span className="text-palette-magenta">React</span> and <span className="text-palette-magenta">TypeScript</span> with <span className="text-palette-magenta">Node.js</span>.<br />
        The first CSS framework that I started using was <span className="text-palette-cyan">Tailwind CSS</span>.<br />
        Currently though, I prefer using <span className="text-palette-yellow">twind</span> or <span className="text-palette-yellow">unocss</span> due to
        their <span className="text-palette-cyan">smaller bundle sizes and speed</span>.<br />
        For web frameworks, I prefer using <span className="text-palette-magenta">Fresh</span>, and for
        side/simple projects, I use <span className="text-palette-magenta">Vite</span>.<br />
        However, I have knowledge of <span className="text-palette-yellow">Next.js</span>, and have used it for multiple&nbsp;
        <Link to="/projects"><span className="text-palette-yellow hover:underline">projects</span><sup><ExternalLink className="w-5 h-5 inline" /></sup></Link>.<br />
        For backend tools, I have used <span className="text-palette-magenta">Express</span> and <span className="text-palette-magenta">Fastify</span>.<br />
        I have also used <span className="text-palette-cyan">Deno</span> for a few projects, and used <span className="text-palette-cyan">SQLite</span> for databases.<br />
        For ORM, I usually use <span className="text-palette-magenta">Prisma</span>.<br />
      </p>

      <br />

      <h3 className="text-xl md:text-2xl mb-2 font-semibold font-mono">Other</h3>
      <p className="text-base md:text-lg">
        I have some experience with <span className="text-palette-yellow">Linux</span>.<br />
        I am using <span className="text-palette-cyan">Git</span> for version control,
        and host most of my projects on <span className="text-palette-cyan">GitHub</span>.<br />
        Almost every discord bot that I made uses <span className="text-palette-yellow">Discord.js</span>.<br />
        Other than programming, I use <span className="text-palette-magenta">FL Studio</span> and <span className="text-palette-magenta">SunVox</span>&nbsp;
        for music production, and use <span className="text-palette-magenta">lilypond</span> for composing.<br />
      </p>
    </div>
  )
}
