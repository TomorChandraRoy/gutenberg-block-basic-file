
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';


registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );

// registerBlockType(metadata.name, {...})

// এখানে metadata.name ব্লকের নাম হিসেবে কাজ করছে, যেটি block.json ফাইল থেকে আনা হয়েছে।
// registerBlockType() ফাংশনটি ব্লক রেজিস্ট্রেশনের জন্য ব্যবহার করা হয়, যাতে WordPress এডিটরে ব্লকটি দেখা এবং ব্যবহার করা যায়।
// edit: Edit

// এখানে Edit হল সেই কম্পোনেন্ট যা ব্লক এডিটরের মধ্যে ব্লকের কনটেন্ট প্রদর্শন করে এবং ইউজার ইনপুট গ্রহণ করে।
// Edit কম্পোনেন্টটি edit.js ফাইল থেকে ইমপোর্ট করা হয়েছে।
// save: save

// save হল সেই ফাংশন যা ব্লকের HTML আউটপুট তৈরি করে এবং তা WordPress ডাটাবেসে সেভ করে।
// save.js ফাইল থেকে এটি ইমপোর্ট করা হয়েছে।
// import './style.scss';

// style.scss ফাইলটি ব্লকের জন্য স্টাইল শীট যোগ করে, যা ফ্রন্টএন্ড এবং এডিটর উভয় ক্ষেত্রেই ব্যবহৃত হবে।

// উদাহরণ:
// ধরা যাক, আপনি "Basic Plugin" ব্লক তৈরি করেছেন। এই ব্লকটি যখন Gutenberg Editor-এ লোড হবে:

// edit.js থেকে Edit কম্পোনেন্ট দ্বারা এডিটর ভিউ দেখা যাবে।
// save.js থেকে save ফাংশন দ্বারা ব্লকটি সেভ হলে তার HTML আউটপুট তৈরি হবে।