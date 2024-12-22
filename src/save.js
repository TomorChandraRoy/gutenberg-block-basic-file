import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Basic Plugin – hello from the saved content!' }
		</p>
	);
}

// save.js ফাইলটি WordPress ব্লকের "save" কম্পোনেন্টকে সংজ্ঞায়িত করে, যা ব্লকটি যখন সেভ করা হয় তখন তার HTML আউটপুট তৈরি করে। এটি ব্লকের ফ্রন্টএন্ড ভিউ এবং ডাটাবেসে সংরক্ষিত কন্টেন্টের আউটপুট নির্ধারণ করে।

// import { useBlockProps } from '@wordpress/block-editor';

// এই লাইনটি useBlockProps হুকটি ইমপোর্ট করে, যা ব্লকের জন্য প্রয়োজনীয় প্রপস (CSS ক্লাস ও অন্যান্য অ্যাট্রিবিউট) প্রদান করে।
// useBlockProps.save()

// এটি ব্লকের সেভ ফাংশনের জন্য প্রয়োজনীয় প্রপস প্রদান করে, যাতে ব্লকের HTML আউটপুট যথাযথভাবে প্রদর্শিত হয়।
// <p { ...useBlockProps.save() }>

// এটি একটি <p> ট্যাগে সেভ প্রপস প্রয়োগ করে। useBlockProps.save() এর মাধ্যমে ব্লকটির সেভ করা HTML কনটেন্টে প্রপস যোগ করা হয়।
// { 'Basic Plugin – hello from the saved content!' }

// এখানে ব্লকটির HTML কনটেন্ট হিসেবে "Basic Plugin – hello from the saved content!" টেক্সটটি প্রদর্শিত হবে। এটি ফ্রন্টএন্ডে (ওয়েবসাইটে) যখন সেভ করা হবে তখন দেখা যাবে।



// save.js ফাইলের কাজ:
// HTML আউটপুট তৈরি:

// save ফাংশনটি সেই ফাংশন যা ব্লকটি সেভ হওয়ার সময় ব্লকের HTML আউটপুট তৈরি করে।
// এই HTML আউটপুট ফ্রন্টএন্ডে প্রদর্শিত হবে, অর্থাৎ ব্লকটি ওয়েবসাইটে কেমন দেখাবে তা নির্ধারণ করবে।
// useBlockProps.save() ব্যবহার:

// useBlockProps.save() ফাংশনটি ব্লকের জন্য প্রয়োজনীয় প্রপস (যেমন CSS ক্লাস, ডাটা অ্যাট্রিবিউট) প্রদান করে।
// এটি ব্লকের সেভ করা অবস্থায় অ্যাসেট (যেমন CSS ক্লাস) যোগ করার জন্য ব্যবহৃত হয়।