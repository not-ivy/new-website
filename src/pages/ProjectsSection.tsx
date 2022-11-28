import IconLink from "../ui/IconLink";
import WorkInProgress from "../ui/WorkInProgress";

export default function ProjectsSection() {
  return (
    <div>
      <WorkInProgress />
      <figure>
        <img src='/projects/melon.webp' alt='melon' className="mb-2" />
        <figcaption className='text-center'>
          <IconLink href="https://github.com/not-ivy/melon" label="Melon" />
          <p className="text-lg">
            A tiny link shortener built with <span className="text-palette-magenta">fresh</span>.
          </p>
        </figcaption>
      </figure>

      <hr className="border-t-palette-white border-t-2 my-8" />

      <figure>
        <img src='/projects/isotope.webp' alt='isotope' className="mb-2" />
        <figcaption className='text-center'>
          <IconLink href="https://github.com/not-ivy/isotope" label="Isotope" />
          <p className="text-lg">
            A <span className="text-palette-cyan">peer to peer</span> messaging app built using web3 technology.
          </p>
        </figcaption>
      </figure>

      <hr className="border-t-palette-white border-t-2 my-8" />

      <figure>
        <img src='/projects/sparrow.webp' alt='Project Sparrow' className="mb-2" />
        <figcaption className='text-center'>
          <IconLink href="https://sparrow.icu" label="Project Sparrow" />
          <p className="text-lg">
            A social media platform.
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
