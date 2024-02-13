'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';

const SwiperButtonNext = () => {
	const swiper = useSwiper();
	return (
		<button
			className='w-11 h-11 p-[10px] bg-[#33333380] flex justify-center items-center rounded-full absolute text-white top-[140px] right-3 z-10'
			onClick={() => swiper.slideNext()}>
			<FaChevronRight color='white' size={24} />
		</button>
	);
};

const SwiperButtonPrevious = () => {
	const swiper = useSwiper();
	return (
		<button
			className='w-11 h-11 p-[10px] bg-[#33333380] flex justify-center items-center rounded-full absolute text-white top-[140px] left-3 z-10'
			onClick={() => swiper.slidePrev()}>
			<FaChevronLeft color='white' size={24} />
		</button>
	);
};

function Banner() {
	const pagination = {
		clickable: true,
		renderBullet: function (_: any, className: string) {
			return (
				'<span class="' +
				className +
				'" style="background-color: white;"></span>'
			);
		},
	};

	const [banners, setBanners] = useState([]);

	useEffect(() => {
		fetch('https://api.testvalley.kr/main-banner/all').then(async (res) => {
			const response = await res.json();
			setBanners(response);

			console.log('res', await res.json());
		});
	}, []);

	return (
		<div className='relative z-[2px] w-full border h-[320px]'>
			<Swiper
				className='h-[320px] flex justify-center items-center bg-blue'
				modules={[Pagination]}
				pagination={pagination}
				scrollbar={{ draggable: true }}
				spaceBetween={50}
				loop
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperButtonNext />
				{banners.map((o) => (
					<div key={o?.mainBannerId?.toString()}>
						<SwiperSlide className='flex justify-center items-center'>
							<img src={o?.pcImageUrl} className='w-full h-full' />
						</SwiperSlide>
					</div>
				))}

				<SwiperButtonPrevious />
			</Swiper>
		</div>
	);
}

export default Banner;
