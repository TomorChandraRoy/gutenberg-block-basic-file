
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Basic Plugin – hello from the editor!', 'basic-plugin' ) }    
		</p>
	);
}

// 'basic-plugin' হল টেক্সট ডোমেইন যা block.json ফাইলের সাথে মেলে।