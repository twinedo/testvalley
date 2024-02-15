'use client';
import React, { useEffect, useState } from 'react';

function Shortcuts() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://api.testvalley.kr/main-shortcut/all').then(async (res) => {
			// console.log('res shortcut', await res.json());
			const dat = await res.json();
			setData(dat);
		});

		return () => {};
	}, []);

	return (
		<div className='w-full grid grid-cols-5 md:grid-cols-10 gap-2 py-4 mt-[40px] items-center justify-center'>
			{data.map((o, i) => (
				<div
					key={o?.sort ?? i}
					className='flex flex-col gap-[8px]  justify-center items-center'>
					<img src={o?.imageUrl} className='w-[62px] h-[62px]' />
					{o?.title ?? 'Shortcut'}
				</div>
			))}
		</div>
	);
}

export default Shortcuts;
