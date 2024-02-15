import Banner from '@/components/banner';
import Collections from '@/components/collections';
import Shortcuts from '@/components/shortcuts';
import Toolbar from '@/components/toolbar';

export default async function Home() {
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
