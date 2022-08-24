import {Route, Routes} from 'react-router-dom';
import Breadcrumbs from './components/breadcrumbs';
import Socials from './router/socials';
import Home from './router/home';
import Projects from './router/projects';

export function App() {
	return (
		<div className='p-4 mx-auto max-w-screen-md font-mono'>
			<Breadcrumbs />
			<hr className='border-black dark:border-white my-4'/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/socials' element={<Socials />} />
			</Routes>
		</div>
	);
}
