import React from 'react'
import Header from '../../components/Header'
import './HomePage.scss';
import { MdSearch } from "react-icons/md";


{/* TODO: fix srcset conf */ }

function HomePage() {
	return (
		<div className='flex flex-col gap-2'>
			<Header />
			<section className='container-breeds-search'>
				<img className='rounded-t-3xl' src="./images/HeroImagesm.png" alt="picture of cat"
					srcset="
						./images/HeroImagemd.png 640w,
						./images/HeroImagelg.png 1024w,
					"
				/>
				<div className='breeds-search'>
					<h1 className="breeds-search__heading">CatWiki</h1>
					<p className='breeds-search__description'>Get to know more about your cat breed</p>
					<div className='breeds-search__container-input'>
						<input className='font-medium bg-white' type="text" placeholder='Search' />
						<MdSearch className='breeds-search__container-input__svg' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage