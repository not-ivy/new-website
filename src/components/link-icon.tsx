import {Component} from 'preact';
import {HiExternalLink} from 'react-icons/hi';

export default class LinkIcon extends Component<{href: string}> {
	render() {
		return (
			<a className='inline-flex focus:text-green-400 transition-colors' href={this.props.href}>{this.props.children}<HiExternalLink /></a>
		);
	}
}
