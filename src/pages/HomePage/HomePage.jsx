import React from 'react'
import Header from '../../components/Header'
import './HomePage.scss';
import { MdSearch } from "react-icons/md";


{/* TODO: fix srcset conf */ }

function HomePage() {
	return (
		<div className='flex flex-col gap-2'>
			<Header />
			<section className=''>
				<div className='relative '>
					<img className='rounded-t-3xl absolute -z-10' src="./images/HeroImagesm.png" alt="picture of cat"
						srcset="
							./images/HeroImagemd.png 640w,
							./images/HeroImagelg.png 1024w,
						"
					/>
				</div>
				<div className='breeds-search p-4 text-white flex flex-col gap-3'>
					<h1 className="font-['Mystery_Quest'] text-sm">CatWiki</h1>
					<p className='text-[10px] font-medium max-w-[135px]'>Get to know more about your cat breed</p>
					<div className='container-input'>
						<input className='font-medium bg-white' type="text" placeholder='Search' />
						<MdSearch className='min-w-[12px]' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage