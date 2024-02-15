'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

function Collections() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.testvalley.kr/collections?type=SINGLE&viewType=TILE'
		).then(async (res) => {
			// console.log('ressss', await res.json());
			const response = await res.json();
			const filtered = response.items.filter(
				(o) => o.type === 'SINGLE' && o.viewType === 'TILE'
			);
			console.log('filtererd', filtered);
			setData(filtered);
		});

		return () => {};
	}, []);

	const refSwiper = useRef<SwiperType>();

	return (
		<div className='w-full flex flex-col max-w-[960px] md:mt-[50px] md:p-0 h-full min-h-screen'>
			{data.map((o) => (
				<CollectionsItems key={o.id.toString()} o={o} />
			))}
		</div>
	);
}

function CollectionsItems({ o }) {
	// const refSwiper = useRef<SwiperType>();
	const [swiper, setSwiper] = useState<SwiperType>();
	const [allowPrev, setAllowPrev] = useState(false);
	const [allowNext, setAllowNext] = useState(false);

	useEffect(() => {
		if (swiper) {
			swiper.on('slideChange', () => {
				setAllowPrev(swiper.isBeginning);

				setAllowNext(swiper.isEnd);
			});
		}
	}, [swiper]);
	return (
		<div
			key={o.id.toString()}
			className='relative overflow-hidden w-full flex h-full md:flex-row mt-[56px] '>
			<div className='md:w-[240px] md:h-[326px] absolute z-1 pr-[40px] pb-[20px] bg-white flex flex-col justify-between'>
				<div>
					<div className='font-semibold text-base text-gray-700 overflow-hidden overflow-ellipsis whitespace-normal break-words line-clamp-2 leading-6'>
						{o?.title ?? ''}
					</div>
					<div className='mt-[8px] font-medium text-sm text-gray-600 w-full overflow-hidden overflow-ellipsis break-words line-clamp-2 leading-5'>
						{o?.subtitle ?? ''}
					</div>
				</div>
			</div>

			<Swiper
				className='swiper-container'
				scrollbar={{ draggable: true }}
				spaceBetween={8}
				slidesPerView={4}
				loop={false}
				modules={[Autoplay, Navigation]}
				onBeforeInit={setSwiper}
				style={{ width: 'calc(100% - 240px)', marginRight: 0 }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}>
				{o?.items &&
					o?.items?.map((item, i) => (
						<SwiperSlide
							key={item?.uuid}
							className='flex justify-center items-center w-[174px] max-w-[174px] h-full mr-2'>
							<img
								src={item?.publication?.media[0]?.uri}
								className='w-[174px] h-[174px]'
							/>
							<div>{item?.publication?.title}</div>
							<div>
								<span className='text-[#FF5023]'>
									{item?.publication?.priceInfo?.discountRate ?? '0'}%
								</span>
								{item?.publication?.priceInfo?.discountPrice ?? '0'}원
							</div>
							<div className='inline-block px-4 py-3 mr-4 font-semibold text-xs leading-3 text-center text-red-700 bg-red-100 rounded-md'>
								{item?.publication?.tagsOnDesc.toString()}
							</div>
							<div className='flex flex-row items-center'>
								<img
									src='https://www.testvalley.kr/star/star-darkgray.svg'
									className='w-[12px] h-[12px]'
								/>
								<div>{item?.publication?.rating ?? '0'}</div>
							</div>
							<div className='mt-8 text-xs px-[6px] py-1 inline-flex items-center border border-gray-200 rounded-md'>
								<img
									src={item?.publication?.prefaceIconUrl}
									className='w-[14px] h-[14px]'
								/>
								<div>{item?.publication?.preface ?? '-'}</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
			<div
				className='flex flex-row gap-4'
				style={{
					position: 'absolute',
					left: 0,
					bottom: 0,
					zIndex: 10,
				}}>
				<FaChevronLeft
					color={!allowPrev ? 'black' : 'grey'}
					onClick={() => {
						if (!allowPrev) {
							swiper?.slidePrev();
						}
					}}
				/>
				<FaChevronRight
					color={!allowNext ? 'black' : 'grey'}
					onClick={() => {
						if (!allowNext) {
							swiper?.slideNext();
						}
					}}
				/>
			</div>
		</div>
	);
}

export default Collections;
