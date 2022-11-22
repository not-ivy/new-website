import { Link, useLocation } from 'wouter';

export interface Props {
  href: string;
  label: string;
}

export default function ColorLink({ href, label }: Props) {
  const [location] = useLocation();
  return (
    <Link to={href}>
      <span className={`cursor-pointer hover:underline ${location === href ? 'text-palette-cyan' : 'text-palette-white'}`}>
        {label}
      </span>
    </Link>
  );
}