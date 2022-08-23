import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const breadcrumbs = useLocation().pathname.split('/');
  if (!breadcrumbs[0]) { breadcrumbs[0] = '~' }

  return (
    <div>
      <p>{breadcrumbs.join(' / ')}</p>
      <br />
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}