'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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

	const [banners, setBanners] = useState([]);

	useEffect(() => {
		fetch('https://api.testvalley.kr/main-banner/all').then(async (res) => {
			const response = await res.json();
			setBanners(response);
		});
	}, []);

	const [autoplayEnabled, setAutoplayEnabled] = useState(true);

	const swiper = useSwiper();

	useEffect(() => {
		if (autoplayEnabled) {
			swiper?.autoplay?.start();
		} else {
			swiper?.autoplay?.stop();
		}

		return () => {
			swiper?.autoplay?.stop();
		};
	}, [autoplayEnabled, swiper]);

	return (
		<div className='relative z-[2px] w-full border h-[320px]'>
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
							<img src={o?.pcImageUrl} className='w-full h-full' />
						</SwiperSlide>
					</div>
				))}

				<SwiperButtonPrevious />
			</Swiper>
		</div>
	);
}

// export default Banner;
