// Maintainability === 0%

import {Link, useLocation} from 'react-router-dom';

const relation: any = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	'~': ['projects', 'stuff'],
	projects: ['asdasdas', 'asdads'],
};

export default function Breadcrumbs() {
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
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const linkedPages: string[] = relation[breadcrumbs[breadcrumbs.length - 1]];
	if (linkedPages) {
		linkBreadcrumbs.push(<div className='inline-flex flex-col text-gray-300'>{
			linkedPages.map((p: string) => (
				<Link to={`/${p}`}>&nbsp;/&nbsp;{p}</Link>
			))
		}</div>);
	}

	return (
		<p>{linkBreadcrumbs}</p>
	);
}
