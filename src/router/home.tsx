// eslint-disable-next-line n/file-extension-in-import
import {StateUpdater} from 'preact/hooks';

export default function Home(props: {state: boolean; setState: StateUpdater<boolean>}) {
	const {state, setState} = props;
	return (
		<div>
			<h1 className='m-2 text-4xl font-semibold text-center'>Hi! I'm ivy.</h1>
			<p className='text-sm text-center'>
				<span className='cursor-pointer underline' onClick={() => {
					setState(!state);
				}}>they/them</span> <br />
				<span>I like building websites.</span>
			</p>
		</div>
	);
}
