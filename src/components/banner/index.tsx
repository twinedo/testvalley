'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import Image from 'next/image';
import { TBanner } from '../../../declaration';

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

export default function Banner() {
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

	const [banners, setBanners] = useState<TBanner[]>([]);

	useEffect(() => {
		fetch(`${process.env.BASE_URL}/main-banner/all`).then(async (res) => {
			const response = (await res.json()) as TBanner[];
			setBanners(response);
		});
	}, []);

	return (
		<div className='relative z-[2px] w-full h-[320px]'>
			<Swiper
				className='h-[320px] flex justify-center items-center bg-blue'
				modules={[Autoplay, Pagination]}
				pagination={pagination}
				scrollbar={{ draggable: true }}
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}>
				<SwiperButtonNext />
				{banners.map((o, i) => (
					<div key={i.toString()}>
						<SwiperSlide className='flex justify-center items-center'>
							<Image
								src={o?.pcImageUrl}
								className='w-full h-full'
								fill
								alt='banner'
							/>
						</SwiperSlide>
					</div>
				))}

				<SwiperButtonPrevious />
			</Swiper>
		</div>
	);
}
