
#### flywheel aer  account hosche = myplugins account aer moddhe ace

 ## basic.plugin.php basic-block.php ফাইলটি একটি WordPress প্লাগইন হিসেবে কাজ করে এবং ব্লকের রেজিস্ট্রেশন পরিচালনা করে। ফাইলটি ব্যবহার করা হয়:WordPress অ্যাকশন হুকে যোগ করার জন্য, যাতে ব্লকটি রেজিস্টার হয়।/build ফোল্ডারের block.json ফাইল থেকে তথ্য নিয়ে ব্লক তৈরি করে।

1. /**
 * Plugin Name:       Basic Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       basic-plugin
 */

ব্যাখ্যা:
Plugin Name: প্লাগইনের নাম। এটি WordPress প্লাগইন লিস্টে প্রদর্শিত হবে।
Description: প্লাগইনের সংক্ষিপ্ত বিবরণ। এটি ব্যবহারকারীর বুঝতে সাহায্য করে এই প্লাগইন কী করে।
Requires at least: WordPress-এর সর্বনিম্ন সংস্করণ যা এই প্লাগইনের জন্য প্রয়োজন।
Requires PHP: PHP-এর সর্বনিম্ন সংস্করণ যা এই প্লাগইনের জন্য প্রয়োজন।
Version: প্লাগইনের বর্তমান সংস্করণ। এটি প্রতিবার আপডেট করার সময় পরিবর্তন করুন।
Author: যিনি এই প্লাগইন তৈরি করেছেন তার নাম।
License: প্লাগইনের লাইসেন্স টাইপ (এখানে GPL-2.0-or-later ব্যবহার করা হয়েছে)।
License URI: লাইসেন্সের বিস্তারিত তথ্য।
Text Domain: অনুবাদের জন্য একটি ইউনিক টেক্সট ডোমেইন। এটি block.json এর টেক্সট ডোমেইনের সাথে মিলে থাকতে হবে।


2. #### Direct Access Preventer
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

ব্যাখ্যা:
এটি সরাসরি ব্রাউজার থেকে ফাইলটি চালানোর চেষ্টা করলে স্ক্রিপ্টটি বন্ধ করে দেয়।
ABSPATH চেক করে এটি নিশ্চিত করা হয় যে ফাইলটি WordPress-এর মাধ্যমে চলছে।
এটি প্লাগইনের সিকিউরিটি বৃদ্ধি করে।

3. #### Function for Block Registration
function create_block_basic_plugin_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_basic_plugin_block_init' );

ব্যাখ্যা:
create_block_basic_plugin_block_init() ফাংশন:

এই ফাংশনের মাধ্যমে ব্লকটি WordPress-এ রেজিস্টার করা হয়।
register_block_type() ফাংশনটি ব্যবহার করে /build ডিরেক্টরির block.json থেকে ব্লকের মেটাডেটা, স্ক্রিপ্ট, এবং স্টাইল লোড করে।
add_action( 'init', 'create_block_basic_plugin_block_init' );

WordPress-এর init অ্যাকশন হুকে ফাংশনটি সংযুক্ত করা হয়।
এর মানে WordPress লোড হওয়ার পরে ব্লক রেজিস্টার করার কাজটি শুরু হবে।


4. ব্লকের সম্পদগুলি (Assets) লোডিং
register_block_type() ফাংশন:
এটি ব্লকের স্টাইল, স্ক্রিপ্ট, এবং অন্যান্য মেটাডেটা স্বয়ংক্রিয়ভাবে লোড করে।
মেটাডেটা: block.json ফাইল থেকে আসে।
অ্যাসেট: /build ফোল্ডারের JavaScript এবং CSS ফাইলগুলি লোড করে।


#### ফাইলটির ব্যবহার
ব্লক রেজিস্টার করা:
এই ফাইলের মাধ্যমে আপনি WordPress ব্লক তৈরি করতে পারবেন এবং এটি এডিটর ও ফ্রন্টএন্ড উভয় ক্ষেত্রেই কাজ করবে।

ব্লকের মেটাডেটা লোড করা:
এটি block.json থেকে সমস্ত তথ্য (যেমন, স্ক্রিপ্ট, স্টাইল, এবং মেটাডেটা) রেজিস্টার করে।

সিকিউরিটি নিশ্চিত করা:
সরাসরি স্ক্রিপ্ট অ্যাক্সেস রোধ করতে সিকিউরিটি চেক ব্যবহার করা হয়েছে।

#### পরামর্শ
ফাইলটি WordPress প্লাগইন ডিরেক্টরির মূল ফোল্ডারে রাখতে হবে।
যদি প্লাগইনে নতুন ব্লক যোগ করতে হয়, তাহলে প্রতিটি ব্লকের জন্য আলাদা block.json এবং JavaScript ফাইল তৈরি করুন।
ডেভেলপমেন্টের সময় npm run build চালিয়ে /build ফোল্ডার আপডেট করুন।



## Block.Json এটি WordPress ব্লক রেজিস্ট্রেশনের জন্য প্রয়োজনীয় তথ্য সরবরাহ করে।  ফাইলটি ব্যবহার করা হয়: WordPress-এর register_block_type() ফাংশনের মাধ্যমে এই ফাইল থেকে তথ্য লোড করা হয় jeta basic-plugin.php a ache।


{
	"$schema": "https://schemas.wp.org/trunk/block.json", // এই ফাইলের স্ট্রাকচার যাচাই করার জন্য স্কিমা। সর্বশেষ WordPress স্ট্যান্ডার্ড অনুযায়ী রাখুন।
	"apiVersion": 3, // ব্লকের API সংস্করণ। WordPress 5.9 বা তার পরে ব্যবহারের জন্য API version 3 নির্ধারণ করা হয়েছে।
	"name": "create-block/basic-plugin", // ব্লকের ইউনিক আইডি। এটি অন্য কোনো ব্লকের সাথে মিলে গেলে কনফ্লিক্ট হতে পারে।
	"version": "0.1.0", // ব্লকের সংস্করণ নম্বর। পরিবর্তন করলে এখানে আপডেট করুন।
	"title": "Basic Plugin", // ব্লকের নাম, যা ব্লক এডিটরে দেখানো হবে।
	"category": "widgets", // ব্লকের ক্যাটাগরি। এটি ব্লক এডিটরের নির্দিষ্ট বিভাগের অধীনে প্রদর্শিত হবে।
	"icon": "editor-expand", // ব্লকের জন্য একটি আইকন। এটি Dashicons অথবা কাস্টম SVG হতে পারে।
	"description": "Example block scaffolded with Create Block tool.", // ব্লক সম্পর্কে একটি সংক্ষিপ্ত বিবরণ।
	"example": {}, // এখানে ডেমো ডেটা যুক্ত করলে ব্লকের প্রিভিউ দেখা যাবে।
	"supports": {
		"html": false // এই ব্লকের HTML ম্যানুয়ালি সম্পাদনা করা যাবে না। যদি প্রয়োজন হয়, এটিকে `true` করুন।
	},
	"textdomain": "basic-plugin", // অনুবাদের জন্য টেক্সটডোমেইন। এটি আপনার প্লাগইনের নামের সাথে মিলে থাকা উচিত।
	"editorScript": "file:./index.js", // এডিটরের জন্য জাভাস্ক্রিপ্ট ফাইলের পথ।
	"editorStyle": "file:./index.css", // এডিটরের জন্য CSS ফাইলের পথ।
	"style": "file:./style-index.css", // ফ্রন্টএন্ডের জন্য CSS ফাইলের পথ।
	"viewScript": "file:./view.js" // ফ্রন্টএন্ড ইন্টারঅ্যাকশনের জন্য জাভাস্ক্রিপ্ট ফাইলের পথ।
}


//** block.json ফাইল WordPress ব্লক তৈরির জন্য একটি কনফিগারেশন ফাইল, যেখানে একটি ব্লকের সকল মেটাডেটা সংরক্ষিত থাকে। এটি ব্লক রেজিস্টার করার সময় WordPress ব্যবহার করে। block.json ফাইলে কোনো পরিবর্তন করলে আপনি তা WordPress ব্লক এডিটরে এবং ব্লকের ফ্রন্টএন্ডে দেখতে পারবেন।

// block.json এর ভূমিকা:
// ব্লক নিবন্ধন সহজ করা:
// এই ফাইলটি WordPress এর register_block_type ফাংশনের মাধ্যমে ব্লক রেজিস্টার করার প্রয়োজনীয় তথ্য সরবরাহ করে।

// স্ক্রিপ্ট ও স্টাইল লোড:
// এডিটর এবং ফ্রন্টএন্ড উভয়ের জন্য আলাদা স্ক্রিপ্ট ও স্টাইল সংজ্ঞায়িত করতে সাহায্য করে।

// ব্লকের মেটাডেটা সংরক্ষণ:
// ব্লকের নাম, ক্যাটাগরি, ডিপেন্ডেন্সি, এবং অন্যান্য তথ্য স্টোর করে।//** block.json ফাইল WordPress ব্লক তৈরির জন্য একটি কনফিগারেশন ফাইল, যেখানে একটি ব্লকের সকল মেটাডেটা সংরক্ষিত থাকে। এটি ব্লক রেজিস্টার করার সময় WordPress ব্যবহার করে। block.json ফাইলে কোনো পরিবর্তন করলে আপনি তা WordPress ব্লক এডিটরে এবং ব্লকের ফ্রন্টএন্ডে দেখতে পারবেন।

// block.json এর ভূমিকা:
// ব্লক নিবন্ধন সহজ করা:
// এই ফাইলটি WordPress এর register_block_type ফাংশনের মাধ্যমে ব্লক রেজিস্টার করার প্রয়োজনীয় তথ্য সরবরাহ করে।

// স্ক্রিপ্ট ও স্টাইল লোড:
// এডিটর এবং ফ্রন্টএন্ড উভয়ের জন্য আলাদা স্ক্রিপ্ট ও স্টা//** block.json ফাইল WordPress ব্লক তৈরির জন্য একটি কনফিগারেশন ফাইল, যেখানে একটি ব্লকের সকল মেটাডেটা সংরক্ষিত থাকে। এটি ব্লক রেজিস্টার করার সময় WordPress ব্যবহার করে। block.json ফাইলে কোনো পরিবর্তন করলে আপনি তা WordPress ব্লক এডিটরে এবং ব্লকের ফ্রন্টএন্ডে দেখতে পারবেন।

// block.json এর ভূমিকা:
// ব্লক নিবন্ধন সহজ করা:
// এই ফাইলটি WordPress এর register_block_type ফাংশনের মাধ্যমে ব্লক রেজিস্টার করার প্রয়োজনীয় তথ্য সরবরাহ করে।

// স্ক্রিপ্ট ও স্টাইল লোড:
// এডিটর এবং ফ্রন্টএন্ড উভয়ের জন্য আলাদা স্ক্রিপ্ট ও স্টাইল সংজ্ঞায়িত করতে সাহায্য করে।

// ব্লকের মেটাডেটা সংরক্ষণ:
// ব্লকের নাম, ক্যাটাগরি, ডিপেন্ডেন্সি, এবং অন্যান্য তথ্য স্টোর করে।ইল সংজ্ঞায়িত করতে সাহায্য করে।

// ব্লকের মেটাডেটা সংরক্ষণ:
// ব্লকের নাম, ক্যাটাগরি, ডিপেন্ডেন্সি, এবং অন্যান্য তথ্য স্টোর করে।


{
	"$schema": "https://schemas.wp.org/trunk/block.json", // এই ফাইলের স্ট্রাকচার যাচাই করার জন্য স্কিমা। সর্বশেষ WordPress স্ট্যান্ডার্ড অনুযায়ী রাখুন।
	"apiVersion": 3, // ব্লকের API সংস্করণ। WordPress 5.9 বা তার পরে ব্যবহারের জন্য API version 3 নির্ধারণ করা হয়েছে।
	"name": "create-block/basic-plugin", // ব্লকের ইউনিক আইডি। এটি অন্য কোনো ব্লকের সাথে মিলে গেলে কনফ্লিক্ট হতে পারে।
	"version": "0.1.0", // ব্লকের সংস্করণ নম্বর। পরিবর্তন করলে এখানে আপডেট করুন।
	"title": "Basic Plugin", // ব্লকের নাম, যা ব্লক এডিটরে দেখানো হবে।
	"category": "widgets", // ব্লকের ক্যাটাগরি। এটি ব্লক এডিটরের নির্দিষ্ট বিভাগের অধীনে প্রদর্শিত হবে।
	"icon": "editor-expand", // ব্লকের জন্য একটি আইকন। এটি Dashicons অথবা কাস্টম SVG হতে পারে।
	"description": "Example block scaffolded with Create Block tool.", // ব্লক সম্পর্কে একটি সংক্ষিপ্ত বিবরণ।
	"example": {}, // এখানে ডেমো ডেটা যুক্ত করলে ব্লকের প্রিভিউ দেখা যাবে।
	"supports": {
		"html": false // এই ব্লকের HTML ম্যানুয়ালি সম্পাদনা করা যাবে না। যদি প্রয়োজন হয়, এটিকে `true` করুন।
	},
	"textdomain": "basic-plugin", // অনুবাদের জন্য টেক্সটডোমেইন। এটি আপনার প্লাগইনের নামের সাথে মিলে থাকা উচিত।
	"editorScript": "file:./index.js", // এডিটরের জন্য জাভাস্ক্রিপ্ট ফাইলের পথ।
	"editorStyle": "file:./index.css", // এডিটরের জন্য CSS ফাইলের পথ।
	"style": "file:./style-index.css", // ফ্রন্টএন্ডের জন্য CSS ফাইলের পথ।
	"viewScript": "file:./view.js" // ফ্রন্টএন্ড ইন্টারঅ্যাকশনের জন্য জাভাস্ক্রিপ্ট ফাইলের পথ।
}


## edit.js

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

এটি একটি React কম্পোনেন্ট, যা ব্লকের Edit Interface সংজ্ঞায়িত করে।
এই কম্পোনেন্টটি Gutenberg Editor-এ ব্লকের ভিজ্যুয়াল প্রদর্শন এবং ইন্টারঅ্যাকশন নিয়ন্ত্রণ করে।
<p { ...useBlockProps() }> ... </p>

useBlockProps() ফাংশন থেকে প্রাপ্ত ব্লকের ডিফল্ট প্রপস (যেমন CSS ক্লাস) <p> ট্যাগে প্রয়োগ করা হয়েছে।
এটি WordPress এর ব্লকের প্রয়োজনীয় ডাটা ও স্টাইল মেইনটেইন করতে সাহায্য করে।
__( 'Basic Plugin – hello from the editor!', 'basic-plugin' )

__() ফাংশনটি ব্যবহৃত টেক্সটের জন্য অনুবাদ সক্ষম করে।
প্রদর্শিত টেক্সট: "Basic Plugin – hello from the editor!"
'basic-plugin' হল টেক্সট ডোমেইন যা block.json ফাইলের সাথে মেলে।



আপনার প্রদত্ত JavaScript কোডটি WordPress ব্লকের Edit Component তৈরি করার জন্য ব্যবহৃত হয়। এটি ব্লক এডিটরের (Gutenberg Editor) ভেতরে প্রদর্শিত হওয়া কনটেন্ট এবং এর আচরণ নিয়ন্ত্রণ করে।

কোডের ভূমিকা এবং ব্যাখ্যা
1. 


import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { __ } from '@wordpress/i18n;

এটি WordPress এর i18n (Internationalization) প্যাকেজ থেকে __ ফাংশন ইমপোর্ট করে।
এই ফাংশনটি অনুবাদ (Translation) হ্যান্ডেল করতে ব্যবহৃত হয়।
উদাহরণ:

__( 'Text to translate', 'text-domain' )

এটি প্রদর্শিত টেক্সটকে WordPress অনুবাদ সিস্টেমের মাধ্যমে পাস করে।
import { useBlockProps } from '@wordpress/block-editor';

এটি ব্লকের props (properties) হ্যান্ডেল করতে ব্যবহৃত হয়।
useBlockProps() একটি React হুক, যা ব্লকের জন্য প্রয়োজনীয় ডেটা এবং CSS ক্লাস অ্যাট্রিবিউট সরবরাহ করে।
import './editor.scss';

এটি ব্লকের জন্য নির্ধারিত স্টাইলশীট (SCSS) ফাইলকে ইমপোর্ট করে।
SCSS ফাইল: শুধুমাত্র ব্লকের এডিটরের মধ্যে স্টাইল প্রয়োগ করে।