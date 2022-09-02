// eslint-disable-next-line n/file-extension-in-import
import {useState} from 'preact/hooks';
import {Route, Routes} from 'react-router-dom';
import Breadcrumbs from './components/breadcrumbs';
import Socials from './router/socials';
import Home from './router/home';
import Projects from './router/projects.mdx';
import Wiki from './router/blog/index.mdx';
import Test from './router/blog/test.mdx';

export function App() {
	const [flagVisibility, setVisibility] = useState(false);
	return (
		<div className='p-4 mx-auto max-w-screen-md'>
			<Breadcrumbs />
			<hr className='border-black dark:border-white my-4'/>
			<Routes>
				<Route path='/' element={<Home state={flagVisibility} setState={setVisibility} />} />
				<Route path='/projects' element={<div className='prose prose-zinc dark:prose-invert'><Projects /></div>} />
				<Route path='/socials' element={<Socials />} />
				<Route path='/blog' element={<div className='prose prose-zinc dark:prose-invert'><Wiki /></div>} />
				<Route path='/blog/test' element={<Test />} />
			</Routes>
			<div id='bottom' className={`${flagVisibility ? 'w-screen' : 'w-0'} absolute bottom-0 left-0 h-2 transition-all`}></div>
		</div>
	);
}
