import React, { useState } from 'react'
import Header from '../../components/Header'
import './HomePage.scss';
import { MdSearch, MdArrowRightAlt } from "react-icons/md";


{/* TODO: fix srcset conf */ }

function HomePage() {
	const [mostSearchBreedsCount, setMostSearchBreedsCount] = useState(66);
	const [mostSearchBreeds, setMostSearchBreeds] = useState([]);
	const [mostSearchBreedsWithLimit4, setMostSearchBreedsWithLimit4] = useState([
		{
			name: "Bengal",
			url: "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
		},
		{
			name: "Ragdoll",
			url: "https://cdn2.thecatapi.com/images/83htMb1AJ.jpg",
		},
		{
			name: "Bengal",
			url: "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
		},
		{
			name: "Ragdoll",
			url: "https://cdn2.thecatapi.com/images/83htMb1AJ.jpg",
		}
	]);

	return (
		<div className='flex flex-col gap-2'>
			<Header />
			<section>

				{/* BREEDS SEARCH */}

				<div className='container-breeds-search'>
					<img className='rounded-t-3xl' src="./images/HeroImagesm.png" alt="picture of cat"
						srcset="
						./images/HeroImagemd.png 640w,
						./images/HeroImagelg.png 1024w,"
					/>
					<div className='breeds-search'>
						<h1 className="breeds-search__heading">CatWiki</h1>
						<p className='breeds-search__description'>Get to know more about your cat breed</p>
						<div className='breeds-search__container-input'>
							<input className='font-medium bg-white' type="text" placeholder='Search' />
							<MdSearch className='breeds-search__container-input__svg' />
						</div>
					</div>
				</div>

				{/* MOST SEARCHED BREEDS */}

				<div className='bg-[#E3E1DC] flex flex-col gap-3 sm:gap-6 rounded-b-3xl p-responsive'>
					<h2 className='most-searched-breeds__heading'>Most Searched Breeds</h2>
					<div className='flex items-center justify-between'>
						<p className='most-searched-breeds__description'>{mostSearchBreedsCount}+ Breeds For you to discover</p>
						<a className='hidden text-[#29150799] sm:flex items-center gap-2' href="">
							<span className='uppercase md:text-lg md:font-bold'>see more</span>
							<MdArrowRightAlt className='min-w-[14px]' size={24} />
						</a>
					</div>

					{/* GRID OF CATS */}
					<ul className='most-searched-breeds__gallery'>
						{mostSearchBreedsWithLimit4.map(it =>
							<li>
								<article className='flex flex-col gap-3 md:max-w-[200px]'>
									<div className='container-ratio-1-1'>
										<img className='child-ratio rounded-xl' src={`${it.url}`} alt="" />
									</div>
									<h2 className='font-semibold text-xs'>{it.name}</h2>
								</article>
							</li>
						)}
					</ul>
				</div>
			</section>
		</div>
	)
}

export default HomePage