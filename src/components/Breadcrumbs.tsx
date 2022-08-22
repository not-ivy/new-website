import { useState, useEffect } from 'preact/hooks';

export default function Breadcrumbs() {
  const [location, setLocation] = useState<Location | undefined>(undefined);
  useEffect(() => { setLocation(window.location) }, [])
  if (!location) return (<p>~</p>)

  const breadcrumbs = location.href.replace(location.origin, '~').split('/')

  return (
    <p>{breadcrumbs.join(' / ')}</p>
  )
}