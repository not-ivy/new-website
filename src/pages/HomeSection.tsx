import BuildingOffice from "../ui/icons/BuildingOffice";
import Identification from "../ui/icons/Identification";

export default function HomeSection() {
  return (
    <div className="text-right text-3xl">
      <h2 className="mb-2">Hi, my name is <span className="text-palette-yellow">ivy</span>.</h2>
      <ul className="text-base flex items-center justify-end gap-x-2">
        <li className="text-palette-cyan flex items-center gap-x-2"><Identification className="w-5 h-5" /><span>they/them</span></li>
        <li className="select-none">|</li>
        <li className="text-palette-magenta flex items-center gap-x-2"><BuildingOffice className="w-5 h-5" /><span>Project Sparrow</span></li>
      </ul>
      
      <br /><br />

      <p className="text-xl">
        Average <span className="text-palette-magenta">web developer</span>,
        <br />
        Rudimentary <span className="text-palette-magenta">UI designer</span>,
        <br />
        and bad <span className="text-palette-magenta">music creator</span>.
      </p>
    </div>
  )
}