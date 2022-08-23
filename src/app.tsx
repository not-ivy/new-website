import {Route, Routes} from 'react-router-dom';
import Breadcrumbs from './components/breadcrumbs';
import Home from './router/home';
import Projects from './router/projects';

export function App() {
	return (
		<div className='p-4 mx-auto max-w-screen-md'>
			<Breadcrumbs />
			<hr className='border-black dark:border-white my-4'/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</div>
	);
}
