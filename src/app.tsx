// eslint-disable-next-line n/file-extension-in-import
import {useState} from 'preact/hooks';
import {Route, Routes} from 'react-router-dom';
import Breadcrumbs from './components/breadcrumbs';
import Socials from './router/socials';
import Home from './router/home';
import Projects from './router/projects';
import Wiki from './router/wiki/index.mdx';
import Test from './router/wiki/test.mdx';

export function App() {
	const [flagVisibility, setVisibility] = useState(false);
	return (
		<div className='p-4 mx-auto max-w-screen-md font-mono'>
			<Breadcrumbs />
			<hr className='border-black dark:border-white my-4'/>
			<Routes>
				<Route path='/' element={<Home state={flagVisibility} setState={setVisibility} />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/socials' element={<Socials />} />
				<Route path='/wiki' element={<Wiki />} />
				<Route path='/wiki/test' element={<Test />} />
			</Routes>
			<div id='bottom' className={`${flagVisibility ? 'w-screen' : 'w-0'} absolute bottom-0 left-0 h-2 transition-all`}></div>
		</div>
	);
}
