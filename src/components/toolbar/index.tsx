import Image from 'next/image';
import React from 'react';
import Input from '../input';

function Toolbar() {
	return (
		<div className='sticky top-0 w-full h-[55px] md:h-[72px] bg-white z-10 border-b border-solid border-gray-300    '>
			<div className='flex relative items-center justify-between max-w-[960px] h-full my-0 mx-auto'>
				<div className='flex ml-5 md:ml-0 w-full items-center justify-between gap-4'>
					<Image
						src={'https://www.testvalley.kr/logo/logo-new.svg'}
						priority
						width={128}
						height={25}
						alt='logo'
					/>
					<div className='hidden md:flex row gap-1 text-[#00D094] text-[16px]'>
						<Image
							src='https://www.testvalley.kr/common/icon-category.svg'
							width={16}
							height={16}
							alt='category'
						/>
						카테고리
					</div>
					<Input
						prefix={
							<Image
								src='https://www.testvalley.kr/common/search.svg'
								width={20}
								height={20}
								priority
								alt='search'
							/>
						}
						placeholder='살까말까 고민된다면 검색해보세요!'
						containerStyle='hidden md:flex'
					/>
					<div className='flex flex-row gap-3 mr-5 md:hidden'>
						<Image
							src='https://www.testvalley.kr/common/bell_default.svg'
							width={24}
							height={24}
							alt='bell'
						/>
						<Image
							src='https://www.testvalley.kr/common/search_new.svg'
							width={18}
							height={20}
							alt='search'
						/>
					</div>
				</div>
				<div className='hidden md:flex items-center justify-center'>
					<button className='mr-[8px]'>
						<Image
							src='https://www.testvalley.kr/common/home-event.svg'
							priority
							width={28}
							height={28}
							alt='home-event'
						/>
					</button>
					<Image
						src='https://www.testvalley.kr/common/vertical-bar.svg'
						priority
						width={1}
						height={14}
						alt='vertical-bar'
						className='mr-[12px]'
					/>
					<button className='text-center text-gray-700 text-sm'>
						로그인 / 회원가입
					</button>
				</div>
			</div>
		</div>
	);
}

export default Toolbar;
