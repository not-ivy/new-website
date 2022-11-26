import { Link } from "wouter";

export default function WikiIndexSection() {
  return (
    <div>
      <h3 className="text-center font-mono text-3xl">Wiki Index</h3>
      <ul>
        <li><Link to="/wiki/test"><span className="underline cursor-pointer">Test Page</span></Link></li>
      </ul>
    </div>
  )
}