import {HiExternalLink, HiKey, HiMail, HiOutlineClipboardCopy} from 'react-icons/hi';
import {FaDiscord, FaGithub} from 'react-icons/fa';

export default function Contacts() {
	return (
		<div>
			<span className='flex items-center'>
				<div className='m-4'><FaGithub size={30} /></div>
				<a className='flex focus:text-green-400 transition-colors' href='https://github.com/not-ivy'>not-ivy<HiExternalLink /></a>
			</span>
			<span className='flex items-center'>
				<div className='m-4'><HiKey size={30} /></div>
				<a className='flex focus:text-green-400 transition-colors' href='https://keys.openpgp.org/vks/v1/by-fingerprint/2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32'>2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32 <HiExternalLink /></a>
			</span>
			<span className='flex items-center'>
				<div className='m-4'><HiMail size={30} /></div>
				<a className='flex focus:text-green-400 transition-colors' href='mailto:ivy@not-ivy.dev'>ivy@not-ivy.dev<HiExternalLink /></a>
			</span>
			<span className='flex items-center'>
				<div className='m-4'><FaDiscord size={30} /></div>
				<button className='flex cursor-pointer focus:text-green-400 transition-colors' onClick={async () => {
					await navigator.clipboard.writeText('ivy#0404');
				}}> ivy#0404<HiOutlineClipboardCopy /></button>
			</span>
		</div>
	);
}
