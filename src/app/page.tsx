import Banner from '@/components/banner';
import Collections from '@/components/collections';
import Shortcuts from '@/components/shortcuts';
import Toolbar from '@/components/toolbar';
import Image from 'next/image';

async function getData() {
	const res = await fetch('https://api.testvalley.kr/main-banner/all', {
		cache: 'force-cache',
	});
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Home() {
	const data = await getData();
	console.log('datanya', data);
	return (
		<main className='flex min-h-screen flex-col min-w-[360px] w-full bg-white items-center justify-between'>
			<Toolbar />
			<div className='max-w-[960px] md:flex-col min-h-screen w-full md:flex md:items-center font-mono text-sm lg:flex'>
				<Banner />
				<Shortcuts />
				<Collections />
			</div>
		</main>
	);
}
