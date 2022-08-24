import {HiExternalLink, HiKey, HiMail, HiOutlineClipboardCopy} from 'react-icons/hi';
import {FaDiscord, FaGithub, FaSpotify, FaSteam, FaTwitter} from 'react-icons/fa';
import LinkIcon from '../components/link-icon';

export default function Socials() {
	return (
		<div>
			<span className='flex items-center hover:text-gray-800 transition-colors'>
				<div className='m-4'><FaGithub size={30} /></div>
				<LinkIcon href='https://github.com/not-ivy'>not-ivy</LinkIcon>
			</span>
			<span className='flex items-center hover:text-fuchsia-600 transition-colors'>
				<div className='m-4'><HiKey size={30} /></div>
				<LinkIcon href='https://keys.openpgp.org/vks/v1/by-fingerprint/2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32'>2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32</LinkIcon>
			</span>
			<span className='flex items-center hover:text-indigo-500 transition-colors'>
				<div className='m-4'><HiMail size={30} /></div>
				<LinkIcon href='mailto:ivy@not-ivy.dev'>ivy@not-ivy.dev</LinkIcon>
			</span>
			<span className='flex items-center hover:text-blue-600 transition-colors'>
				<div className='m-4'><FaDiscord size={30} /></div>
				<button className='flex cursor-pointer focus:text-green-400 transition-colors' onClick={async () => {
					await navigator.clipboard.writeText('ivy#0404');
				}}> ivy#0404<HiOutlineClipboardCopy /></button>
			</span>
			<span className='flex items-center hover:text-sky-500 transition-colors'>
				<div className='m-4'><FaTwitter size={30} /></div>
				<LinkIcon href='https://twitter.com/ivy_reset'>ivy_reset</LinkIcon>
			</span>
			<span className='flex items-center hover:text-slate-600 transition-colors'>
				<div className='m-4'><FaSteam size={30} /></div>
				<LinkIcon href='https://steamcommunity.com/id/not-ivy/'>not-ivy</LinkIcon>
			</span>
			<span className='flex items-center hover:text-green-400 transition-colors'>
				<div className='m-4'><FaSpotify size={30} /></div>
				<LinkIcon href='https://open.spotify.com/user/mnoye6e6bnztqprrdfq0ub1du'>ivy</LinkIcon>
			</span>
		</div>
	);
}
