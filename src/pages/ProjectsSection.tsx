import ExternalLink from "../ui/icons/ExternalLink";
import WorkInProgress from "../ui/WorkInProgress";

export default function ProjectsSection() {
  return (
    <div>
      <WorkInProgress />
      <h3 className="text-3xl font-semibold mb-2 font-mono"><a href="https://github.com/not-ivy/melon" className="hover:underline">Melon<sup><ExternalLink /></sup></a></h3>
      <p>
        A link shortener written in <span className="text-palette-magenta">TypeScript</span>, made with <span className="text-palette-magenta">Fresh</span><br />
      </p>

      <br /><br />
      
      <h3 className="text-3xl font-semibold mb-2 font-mono"><a href="https://github.com/not-ivy/isotope" className="hover:underline">Isotope<sup><ExternalLink /></sup></a></h3>
      <p>
        A simple chat application using <span className="text-palette-magenta">IPFS</span>.
      </p>
    </div>
  )
}