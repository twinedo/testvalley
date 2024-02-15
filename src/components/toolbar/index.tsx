import Image from 'next/image';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import Input from '../input';

function Toolbar() {
	return (
		<div className='sticky top-0 w-full h-[72px] bg-white z-10 border-b border-solid border-gray-300    '>
			<div className='flex relative items-center justify-between max-w-[960px] h-full my-0 mx-auto'>
				<div className='flex items-center justify-between gap-4'>
					<Image
						src={'https://www.testvalley.kr/logo/logo-new.svg'}
						priority
						width={128}
						height={25}
						alt='logo'
					/>
					<div className='flex row gap-1 text-[#00D094] text-[16px]'>
						<img
							src='https://www.testvalley.kr/common/icon-category.svg'
							className='w-4 h-4'
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
						containerStyle='w-[335px] ml-[90px]'
						placeholder='살까말까 고민된다면 검색해보세요!'
					/>
				</div>
				<div className='flex items-center justify-center'>
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
					<button className='text-center text-gray-700 text-sm font-medium leading-4'>
						로그인 / 회원가입
					</button>
				</div>
			</div>
		</div>
	);
}

export default Toolbar;
