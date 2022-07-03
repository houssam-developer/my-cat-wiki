import React from 'react';
import MyLogoSvg from '../../public/images/MyLogoSvg';

function Footer() {
	return (
		<div className='w-full text-white'>
			<div className=' mx-auto bg-neutral-900 rounded-t-xl text-white flex flex-col items-start justify-between md:flex-row md:items-center p-4 gap-4'>
				<MyLogoSvg />
				<p className="text-center text-[#ccc]">created by <span className='font-medium text-white'>houssam-developer</span> - devChallenges.io</p>
			</div>
		</div>
	)
}

export default Footer