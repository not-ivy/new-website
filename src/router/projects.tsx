import {FaGithub} from 'react-icons/fa';
import LinkIcon from '../components/link-icon';

export default function Projects() {
	return (
		<article>
			<div>
				<h3 className='my-2 text-3xl font-semibold'><LinkIcon href='https://github.com/not-ivy/idk'>idk<FaGithub size={20} /></LinkIcon></h3>
				<p>
					This is the first full stack app that I have built. In a nutshell, it tracks my online status and logs my mood data.
					I created this app because I wanted to gain more insight into my mood swings. <br />
					Frontend stack: Vite + Preact + TypeScript + TailwindCSS <br />
					Backend stack: PostgreSQL + Prisma + <LinkIcon href='https://www.npmjs.com/package/0http'>0http</LinkIcon> + discord.js
				</p>
			</div>
			<br />
			<div>
				<h3 className='my-2 text-3xl font-semibold'><LinkIcon href='https://github.com/lambda-client-unofficial/lambda-bot-ts'>lambda-bot-ts<FaGithub size={20} /></LinkIcon></h3>
				<p>
					Discord bot written in typescript with an event, command, and logging(save to file) system.
				</p>
			</div>
			<br />
			<div>
				<h3 className='my-2 text-3xl font-semibold'><LinkIcon href='https://github.com/not-ivy/OpenTicket'>OpenTicket<FaGithub size={20} /></LinkIcon></h3>
				<p>
					Simple discord ticket bot written in TypeScript.
				</p>
			</div>
			<br />
			<div>
				<h3 className='my-2 text-3xl font-semibold'>Isotope <span className='text-xl text-yellow-300'>(Closed source, releasing late 2022/early 2023)</span></h3>
				<p>
					A communication app built on peer to peer technology.
				</p>
			</div>
		</article>
	);
}
