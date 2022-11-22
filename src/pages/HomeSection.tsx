export default function HomeSection() {
  return (
    <div className="w-screen-sm mx-auto text-right text-3xl">
      <h2 className="mb-2">Hi, my name is <span className="text-palette-yellow">ivy</span>.</h2>
      <ul className="text-base flex items-center justify-end gap-x-2">
        <li className="text-palette-cyan flex items-center"><div className="i-heroicons-identification-solid mr-2" /><span>they/them</span></li>
        <li className="select-none">|</li>
        <li className="text-palette-magenta flex items-center"><div className="i-heroicons-building-office-2-solid mr-2" /><span>Project Sparrow</span></li>
      </ul>
      
      <br /><br />

      <p className="text-xl">
        Average <span className="text-palette-magenta">web developer</span>,
        <br />
        Improving <span className="text-palette-magenta">UI designer</span>,
        <br />
        and bad <span className="text-palette-magenta">music creator</span>.
      </p>
    </div>
  )
}