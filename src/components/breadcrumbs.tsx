// Maintainability === 0%

// eslint-disable-next-line n/file-extension-in-import
import {useState, useEffect} from 'preact/hooks';
import {Link, useLocation} from 'react-router-dom';

export default function Breadcrumbs() {
	const [relation, setRelation] = useState<Record<string, unknown> | Error | undefined>(undefined);
	useEffect(() => {
		fetch('/sitemap.json')
			.then(async response => response.json())
			.then(data => { setRelation(data); })
			.catch(error => { setRelation(new Error(error)); });
	}, []);
	if (!relation) { return (<p>Loading...</p>); }
	if (relation instanceof Error) { return (<p>Error: <pre>{relation}</pre></p>); }

	const breadcrumbs = useLocation().pathname.split('/');
	const linkBreadcrumbs = [];
	if (!breadcrumbs[0]) {
		breadcrumbs[0] = '~';
	}

	if (!breadcrumbs[breadcrumbs.length - 1]) {
		breadcrumbs.pop();
	}

	for (const b of breadcrumbs) {
		if (b === '~') {
			linkBreadcrumbs.push(<Link to='/'>{b}</Link>);
			continue;
		}

		linkBreadcrumbs.push(<Link to={`/${b}`}>&nbsp;/&nbsp;{b}</Link>);
	}

	const linkedPages: any = relation[breadcrumbs[breadcrumbs.length - 1]];
	if (linkedPages) {
		linkBreadcrumbs.push(<div className='inline-flex flex-col text-zinc-600 dark:text-zinc-400'>{
			linkedPages.map((p: string) => (
				<div className='hover:dark:text-white hover:text-black transition-colors'>
					<Link
						to={`/${breadcrumbs.length === 1 ? '' : `${breadcrumbs.slice(1).join('/')}/`}${p}`}
					>&nbsp;/&nbsp;{p}</Link>
				</div>
			))
		}</div>);
	}

	return (
		<p>{linkBreadcrumbs}</p>
	);
}
