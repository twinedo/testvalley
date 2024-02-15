'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TShortcut } from '../../../declaration';

function Shortcuts() {
	const [data, setData] = useState<TShortcut[]>([]);

	useEffect(() => {
		fetch(`${process.env.BASE_URL}/main-shortcut/all`).then(async (res) => {
			const dat = (await res.json()) as TShortcut[];
			setData(dat);
		});
	}, []);

	return (
		<div className='w-full grid grid-cols-5 md:grid-cols-10 gap-2 py-4 mt-[40px] items-center justify-center'>
			{data.map((o, i) => (
				<div
					key={o?.sort ?? i}
					className='flex flex-col gap-[8px] text-[13px] justify-center items-center'>
					<Image
						src={o?.imageUrl}
						className='w-[62px] h-[62px]'
						width={62}
						height={62}
						alt='shortcut'
					/>
					{o?.title ?? 'Shortcut'}
				</div>
			))}
		</div>
	);
}

export default Shortcuts;
